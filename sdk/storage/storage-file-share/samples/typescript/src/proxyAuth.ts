// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/* 
 Setup: Enter your storage account name and shared key in main()
*/

import { StorageSharedKeyCredential, ShareServiceClient } from "@azure/storage-file-share";

import { runSample } from "./sampleHelpers";

export async function main() {
  // Enter your storage account name and shared key
  const account = process.env.ACCOUNT_NAME || "";
  const accountKey = process.env.ACCOUNT_KEY || "";

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

  // Use StorageSharedKeyCredential with storage account and account key
  // StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  const serviceClient = new ShareServiceClient(
    `https://${account}.file.core.windows.net`,
    sharedKeyCredential,
    {
      // if proxy is undefined, the library tries to load the proxy settings from the environment variables like HTTP_PROXY
      proxyOptions
    }
  );

  // Create a share
  const shareName = `newshare${new Date().getTime()}`;
  const shareClient = serviceClient.getShareClient(shareName);
  await shareClient.create();
  console.log(`Create share ${shareName} successfully`);

  // Delete share
  await shareClient.delete();
  console.log(`deleted share ${shareName}`);
}

runSample(main).catch((err) => {
  console.error("Error running sample:", err.message);
});
