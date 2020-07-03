// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const {
  SearchIndexClient,
  AzureKeyCredential
} = require("@azure/search-documents");
require("dotenv").config();

const endpoint = process.env.SEARCH_API_ENDPOINT || "";
const apiKey = process.env.SEARCH_API_KEY || "";

async function main() {
  console.log(`Running Create Or Update SynonymMap Sample....`);

  const client = new SearchIndexClient(endpoint, new AzureKeyCredential(apiKey));
  console.log(`Get Synonym Map my-synonymmap`);
  const sm = await client.getSynonymMap("my-synonymmap");
  console.log(`Update synonyms Synonym Map my-synonymmap`);
  sm.synonyms.push("Florida, Fld. => FL");
  await client.createOrUpdateSynonymMap(sm);
}

main();
