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
import * as Models from "../models";
import * as Mappers from "../models/managedRuleSetsMappers";
import * as Parameters from "../models/parameters";
import { FrontDoorManagementClientContext } from "../frontDoorManagementClientContext";

/** Class representing a ManagedRuleSets. */
export class ManagedRuleSets {
  private readonly client: FrontDoorManagementClientContext;

  /**
   * Create a ManagedRuleSets.
   * @param {FrontDoorManagementClientContext} client Reference to the service client.
   */
  constructor(client: FrontDoorManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all available managed rule sets.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedRuleSetsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.ManagedRuleSetsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ManagedRuleSetDefinitionList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedRuleSetDefinitionList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedRuleSetDefinitionList>, callback?: msRest.ServiceCallback<Models.ManagedRuleSetDefinitionList>): Promise<Models.ManagedRuleSetsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ManagedRuleSetsListResponse>;
  }

  /**
   * Lists all available managed rule sets.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagedRuleSetsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagedRuleSetsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ManagedRuleSetDefinitionList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ManagedRuleSetDefinitionList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ManagedRuleSetDefinitionList>, callback?: msRest.ServiceCallback<Models.ManagedRuleSetDefinitionList>): Promise<Models.ManagedRuleSetsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ManagedRuleSetsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/FrontDoorWebApplicationFirewallManagedRuleSets",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedRuleSetDefinitionList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ManagedRuleSetDefinitionList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
