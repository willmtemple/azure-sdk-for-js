// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/* 
 Setup: Enter your storage account name and shared key in main()
*/

const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

const { runSample } = require("./sampleHelpers");

async function main() {
  // Enter your storage account name and shared key
  const account = process.env.ACCOUNT_NAME || "";
  const accountKey = process.env.ACCOUNT_KEY || "";

  // Use StorageSharedKeyCredential with storage account and account key
  // StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  // Enter your proxy information
  const proxyOptions = {
    host: process.env.PROXY_HOST || "",
    port: parseInt(process.env.PROXY_PORT || "3128"),
    username: process.env.PROXY_USERNAME || "",
    password: process.env.PROXY_PASSWORD || ""
  };

  if (proxyOptions.host === "") {
    console.warn("Proxy information not provided, but it is required to run this sample. Exiting.");
    return;
  }

  const blobServiceClient = new BlobServiceClient(
    `https://${account}.blob.core.windows.net`,
    sharedKeyCredential,
    {
      // if proxy is undefined, the library tries to load the proxy settings from the environment variables like HTTP_PROXY
      proxyOptions
    }
  );

  // Create a container
  const containerName = `newcontainer${new Date().getTime()}`;
  const createContainerResponse = await blobServiceClient
    .getContainerClient(containerName)
    .create();
  console.log(`Created container ${containerName} successfully`, createContainerResponse.requestId);
}

runSample(main).catch((err) => {
  console.error("Error running sample:", err.message);
});

module.exports = { main };
