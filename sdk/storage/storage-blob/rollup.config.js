// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { makeConfig } from "@azure/dev-tool/shared-config/rollup";

export default makeConfig(require("./package.json"));

/*
import * as base from "./rollup.base.config";

const inputs = [];

if (!process.env.ONLY_BROWSER) {
  inputs.push(base.nodeConfig());
}

// Disable this until we are ready to run rollup for the browser.
if (!process.env.ONLY_NODE) {
  inputs.push(base.browserConfig());
}

export default inputs;
*/
