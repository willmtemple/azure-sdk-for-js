// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/* 
 Setup: Enter your storage account name and shared key in main()
*/

const { ShareServiceClient, StorageSharedKeyCredential } = require("@azure/storage-file-share");

// Load the .env file if it exists
require("dotenv").config();

async function main() {
  // Enter your storage account name and shared key
  const account = process.env.ACCOUNT_NAME || "";
  const accountKey = process.env.ACCOUNT_KEY || "";

  // Use StorageSharedKeyCredential with storage account and account key
  // StorageSharedKeyCredential is only avaiable in Node.js runtime, not in browsers
  const sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey);

  // To use the manual proxyOptions below, remove this block
  if (!process.env.HTTP_PROXY || !process.env.HTTPS_PROXY) {
    console.warn("Proxy information not provided, but it is required to run this sample. Exiting.");
    return;
  }

  const serviceClient = new ShareServiceClient(
    `https://${account}.file.core.windows.net`,
    sharedKeyCredential,
    // The library tries to load the proxy settings from the environment variables like HTTP_PROXY
    // Alternatively, the service client accepts the following `proxyOptions` as part of its options:
    {
      /*
      proxyOptions : {
        // To use these options, remove the section above that checks for HTTP_PROXY or HTTPS_PROXY
        host: "http://localhost",
        port: 3128,
        username: "<username>",
        password: "<password>"
      }
      */
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

main().catch((err) => {
  console.error("Error running sample:", err.message);
});
