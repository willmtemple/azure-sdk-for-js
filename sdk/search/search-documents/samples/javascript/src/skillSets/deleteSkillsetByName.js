// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const {
  SearchIndexerClient,
  AzureKeyCredential
} = require("@azure/search-documents");
require("dotenv").config();

const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";

async function main() {
  console.log(`Running Delete Skillset Sample....`);

  const client = new SearchIndexerClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Deleting Indexer my-azureblob-skillset`);
  await client.deleteSkillset("my-azureblob-skillset")
}

main();
