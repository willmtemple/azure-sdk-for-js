import { assert } from "chai";

import { ConfigurationClient } from "../../src";

import { ClientSecretCredential } from "@azure/identity";
import { env, record, Recorder } from "@azure/test-utils-recorder";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// When the recorder observes the values of these environment variables
// in any recorded HTTP request or response, it will replace them with
// the values they are mapped to below.
const replaceableVariables: Record<string, string> = {
  AZ_CONFIG_ENDPOINT: "https://myappconfig.azconfig.io",
  AZURE_TENANT_ID: "azure_tenant_id",
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret"
};

function getEnv(name: string): string {
  // If a value exists on the real environment, use it,
  // otherwise, try to use the default values from
  // replaceableVariables
  return env[name] ?? replaceableVariables[name];
}

function createConfigurationClient(): ConfigurationClient {
  // Retrieve the endpoint from the environment variable
  // we saved to the .env file earlier
  const endpoint = getEnv("AZ_CONFIG_ENDPOINT");

  // We use ClientSecretCredential instead of DefaultAzureCredential
  // in order to ensure that the requests made to the AAD server are
  // always the same. If we used DefaultAzureCredential, they might
  // be different on some machines than on others, depending on which
  // credentials are available (such as Managed Identity or developer
  // credentials).
  //
  // In customer scenarios, we always recommend the use of
  // DefaultAzureCredential.
  const credential = new ClientSecretCredential(
    getEnv("AZURE_TENANT_ID"),
    getEnv("AZURE_CLIENT_ID"),
    getEnv("AZURE_CLIENT_SECRET")
  );

  return new ConfigurationClient(endpoint, credential /*, options */);
}

// You want to give the test suite a descriptive name. Here, I add
// [AAD] to indicate that the tests are authenticating with the
// service using Azure Active Directory.
describe("[AAD] ConfigurationClient functional tests", function() {
  // Declare the client and recorder instances.
  // We will set them using the beforeEach hook.
  let client: ConfigurationClient;
  let recorder: Recorder;

  // NOTE: use of "function" and not ES6 arrow-style functions
  // with the beforeEach hook is IMPORTANT due to the use of `this`
  // in the function body.
  beforeEach(function() {
    // The recorder has some convenience methods, and we need to store
    // a reference to it so that we can `stop()` the recorder later
    // in the `afterEach` hook.
    recorder = record(this, {
      // == Recorder Environment Setup ==
      // Add the replaceable variables from above
      replaceableVariables,
      // We don't use this for the tutorial, but if we had any
      // query parameters we wished to discard, we could add them
      // here
      queryParametersToSkip: [],
      // Finally, we need to remove the AAD `access_token` from any
      // requests. This is very important, as it cannot be removed
      // using environment variable or query parameter replacement.
      // The `customizationsOnRecordings` field allows us to make
      // arbitrary replacements within recordings.
      customizationsOnRecordings: [
        (recording: any): any =>
          recording.replace(/"access_token":"[^"]*"/g, `"access_token":"access_token"`)
      ]
    });
    // We'll be able to refer to the instantiated `client` in tests,
    // since we initialize it before each test
    client = createConfigurationClient();
  });

  // After each test, we need to stop the recording.
  afterEach(function() {
    recorder.stop();
  });

  it("predetermined setting has expected value", async () => {
    const key = getEnv("APPCONFIG_TEST_SETTING_KEY");
    const expectedValue = getEnv("APPCONFIG_TEST_SETTING_EXPECTED_VALUE");

    const setting = await client.getConfigurationSetting(key);

    // Make sure the key returned is the same as the key we asked for
    assert.equal(setting.key, key);

    // Make sure the value of the setting is the same as the value we
    // entered on the environment
    assert.equal(setting.value, expectedValue);
  });
});
