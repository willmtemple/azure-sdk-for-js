/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { StorageSyncManagementClientContext } from "./storageSyncManagementClientContext";


class StorageSyncManagementClient extends StorageSyncManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  storageSyncServices: operations.StorageSyncServices;
  syncGroups: operations.SyncGroups;
  cloudEndpoints: operations.CloudEndpoints;
  serverEndpoints: operations.ServerEndpoints;
  registeredServers: operations.RegisteredServers;
  workflows: operations.Workflows;
  operationStatus: operations.OperationStatusOperations;

  /**
   * Initializes a new instance of the StorageSyncManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.StorageSyncManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.storageSyncServices = new operations.StorageSyncServices(this);
    this.syncGroups = new operations.SyncGroups(this);
    this.cloudEndpoints = new operations.CloudEndpoints(this);
    this.serverEndpoints = new operations.ServerEndpoints(this);
    this.registeredServers = new operations.RegisteredServers(this);
    this.workflows = new operations.Workflows(this);
    this.operationStatus = new operations.OperationStatusOperations(this);
  }
}

// Operation Specifications

export {
  StorageSyncManagementClient,
  StorageSyncManagementClientContext,
  Models as StorageSyncManagementModels,
  Mappers as StorageSyncManagementMappers
};
export * from "./operations";
