/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import { GeneratedClientContext } from "./generatedClientContext";
import {
  GeneratedClientOptionalParams,
  GeneratedClientGetKeysOptionalParams,
  GeneratedClientGetKeysResponse,
  GeneratedClientCheckKeysOptionalParams,
  GeneratedClientCheckKeysResponse,
  GeneratedClientGetKeyValuesOptionalParams,
  GeneratedClientGetKeyValuesResponse,
  GeneratedClientCheckKeyValuesOptionalParams,
  GeneratedClientCheckKeyValuesResponse,
  GeneratedClientGetKeyValueOptionalParams,
  GeneratedClientGetKeyValueResponse,
  GeneratedClientPutKeyValueOptionalParams,
  GeneratedClientPutKeyValueResponse,
  GeneratedClientDeleteKeyValueOptionalParams,
  GeneratedClientDeleteKeyValueResponse,
  GeneratedClientCheckKeyValueOptionalParams,
  GeneratedClientCheckKeyValueResponse,
  GeneratedClientGetLabelsOptionalParams,
  GeneratedClientGetLabelsResponse,
  GeneratedClientCheckLabelsOptionalParams,
  GeneratedClientCheckLabelsResponse,
  GeneratedClientPutLockOptionalParams,
  GeneratedClientPutLockResponse,
  GeneratedClientDeleteLockOptionalParams,
  GeneratedClientDeleteLockResponse,
  GeneratedClientGetRevisionsOptionalParams,
  GeneratedClientGetRevisionsResponse,
  GeneratedClientCheckRevisionsOptionalParams,
  GeneratedClientCheckRevisionsResponse,
  GeneratedClientGetKeysNextOptionalParams,
  GeneratedClientGetKeysNextResponse,
  GeneratedClientGetKeyValuesNextOptionalParams,
  GeneratedClientGetKeyValuesNextResponse,
  GeneratedClientGetLabelsNextOptionalParams,
  GeneratedClientGetLabelsNextResponse,
  GeneratedClientGetRevisionsNextOptionalParams,
  GeneratedClientGetRevisionsNextResponse
} from "./models";

export class GeneratedClient extends GeneratedClientContext {
  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param endpoint The endpoint of the App Configuration instance to send requests to.
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: GeneratedClientOptionalParams) {
    super(endpoint, options);
  }

  /**
   * Gets a list of keys.
   * @param options The options parameters.
   */
  getKeys(
    options?: GeneratedClientGetKeysOptionalParams
  ): Promise<GeneratedClientGetKeysResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      getKeysOperationSpec
    ) as Promise<GeneratedClientGetKeysResponse>;
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkKeys(
    options?: GeneratedClientCheckKeysOptionalParams
  ): Promise<GeneratedClientCheckKeysResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      checkKeysOperationSpec
    ) as Promise<GeneratedClientCheckKeysResponse>;
  }

  /**
   * Gets a list of key-values.
   * @param options The options parameters.
   */
  getKeyValues(
    options?: GeneratedClientGetKeyValuesOptionalParams
  ): Promise<GeneratedClientGetKeyValuesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      getKeyValuesOperationSpec
    ) as Promise<GeneratedClientGetKeyValuesResponse>;
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkKeyValues(
    options?: GeneratedClientCheckKeyValuesOptionalParams
  ): Promise<GeneratedClientCheckKeyValuesResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      checkKeyValuesOperationSpec
    ) as Promise<GeneratedClientCheckKeyValuesResponse>;
  }

  /**
   * Gets a single key-value.
   * @param key The key of the key-value to retrieve.
   * @param options The options parameters.
   */
  getKeyValue(
    key: string,
    options?: GeneratedClientGetKeyValueOptionalParams
  ): Promise<GeneratedClientGetKeyValueResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { key, options: operationOptions },
      getKeyValueOperationSpec
    ) as Promise<GeneratedClientGetKeyValueResponse>;
  }

  /**
   * Creates a key-value.
   * @param key The key of the key-value to create.
   * @param options The options parameters.
   */
  putKeyValue(
    key: string,
    options?: GeneratedClientPutKeyValueOptionalParams
  ): Promise<GeneratedClientPutKeyValueResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { key, options: operationOptions },
      putKeyValueOperationSpec
    ) as Promise<GeneratedClientPutKeyValueResponse>;
  }

  /**
   * Deletes a key-value.
   * @param key The key of the key-value to delete.
   * @param options The options parameters.
   */
  deleteKeyValue(
    key: string,
    options?: GeneratedClientDeleteKeyValueOptionalParams
  ): Promise<GeneratedClientDeleteKeyValueResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { key, options: operationOptions },
      deleteKeyValueOperationSpec
    ) as Promise<GeneratedClientDeleteKeyValueResponse>;
  }

  /**
   * Requests the headers and status of the given resource.
   * @param key The key of the key-value to retrieve.
   * @param options The options parameters.
   */
  checkKeyValue(
    key: string,
    options?: GeneratedClientCheckKeyValueOptionalParams
  ): Promise<GeneratedClientCheckKeyValueResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { key, options: operationOptions },
      checkKeyValueOperationSpec
    ) as Promise<GeneratedClientCheckKeyValueResponse>;
  }

  /**
   * Gets a list of labels.
   * @param options The options parameters.
   */
  getLabels(
    options?: GeneratedClientGetLabelsOptionalParams
  ): Promise<GeneratedClientGetLabelsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      getLabelsOperationSpec
    ) as Promise<GeneratedClientGetLabelsResponse>;
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkLabels(
    options?: GeneratedClientCheckLabelsOptionalParams
  ): Promise<GeneratedClientCheckLabelsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      checkLabelsOperationSpec
    ) as Promise<GeneratedClientCheckLabelsResponse>;
  }

  /**
   * Locks a key-value.
   * @param key The key of the key-value to lock.
   * @param options The options parameters.
   */
  putLock(
    key: string,
    options?: GeneratedClientPutLockOptionalParams
  ): Promise<GeneratedClientPutLockResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { key, options: operationOptions },
      putLockOperationSpec
    ) as Promise<GeneratedClientPutLockResponse>;
  }

  /**
   * Unlocks a key-value.
   * @param key The key of the key-value to unlock.
   * @param options The options parameters.
   */
  deleteLock(
    key: string,
    options?: GeneratedClientDeleteLockOptionalParams
  ): Promise<GeneratedClientDeleteLockResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { key, options: operationOptions },
      deleteLockOperationSpec
    ) as Promise<GeneratedClientDeleteLockResponse>;
  }

  /**
   * Gets a list of key-value revisions.
   * @param options The options parameters.
   */
  getRevisions(
    options?: GeneratedClientGetRevisionsOptionalParams
  ): Promise<GeneratedClientGetRevisionsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      getRevisionsOperationSpec
    ) as Promise<GeneratedClientGetRevisionsResponse>;
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkRevisions(
    options?: GeneratedClientCheckRevisionsOptionalParams
  ): Promise<GeneratedClientCheckRevisionsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      checkRevisionsOperationSpec
    ) as Promise<GeneratedClientCheckRevisionsResponse>;
  }

  /**
   * GetKeysNext
   * @param nextLink The nextLink from the previous successful call to the GetKeys method.
   * @param options The options parameters.
   */
  getKeysNext(
    nextLink: string,
    options?: GeneratedClientGetKeysNextOptionalParams
  ): Promise<GeneratedClientGetKeysNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nextLink, options: operationOptions },
      getKeysNextOperationSpec
    ) as Promise<GeneratedClientGetKeysNextResponse>;
  }

  /**
   * GetKeyValuesNext
   * @param nextLink The nextLink from the previous successful call to the GetKeyValues method.
   * @param options The options parameters.
   */
  getKeyValuesNext(
    nextLink: string,
    options?: GeneratedClientGetKeyValuesNextOptionalParams
  ): Promise<GeneratedClientGetKeyValuesNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nextLink, options: operationOptions },
      getKeyValuesNextOperationSpec
    ) as Promise<GeneratedClientGetKeyValuesNextResponse>;
  }

  /**
   * GetLabelsNext
   * @param nextLink The nextLink from the previous successful call to the GetLabels method.
   * @param options The options parameters.
   */
  getLabelsNext(
    nextLink: string,
    options?: GeneratedClientGetLabelsNextOptionalParams
  ): Promise<GeneratedClientGetLabelsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nextLink, options: operationOptions },
      getLabelsNextOperationSpec
    ) as Promise<GeneratedClientGetLabelsNextResponse>;
  }

  /**
   * GetRevisionsNext
   * @param nextLink The nextLink from the previous successful call to the GetRevisions method.
   * @param options The options parameters.
   */
  getRevisionsNext(
    nextLink: string,
    options?: GeneratedClientGetRevisionsNextOptionalParams
  ): Promise<GeneratedClientGetRevisionsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nextLink, options: operationOptions },
      getRevisionsNextOperationSpec
    ) as Promise<GeneratedClientGetRevisionsNextResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getKeysOperationSpec: coreHttp.OperationSpec = {
  path: "/keys",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyListResult,
      headersMapper: Mappers.GeneratedClientGetKeysHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.accept,
    Parameters.syncToken,
    Parameters.acceptDatetime
  ],
  serializer
};
const checkKeysOperationSpec: coreHttp.OperationSpec = {
  path: "/keys",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.GeneratedClientCheckKeysHeaders
    },
    default: {}
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const getKeyValuesOperationSpec: coreHttp.OperationSpec = {
  path: "/kv",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.GeneratedClientGetKeyValuesHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
const checkKeyValuesOperationSpec: coreHttp.OperationSpec = {
  path: "/kv",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.GeneratedClientCheckKeyValuesHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const getKeyValueOperationSpec: coreHttp.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationSetting,
      headersMapper: Mappers.GeneratedClientGetKeyValueHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.label, Parameters.select],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const putKeyValueOperationSpec: coreHttp.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationSetting,
      headersMapper: Mappers.GeneratedClientPutKeyValueHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.entity,
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.contentType,
    Parameters.accept3
  ],
  mediaType: "json",
  serializer
};
const deleteKeyValueOperationSpec: coreHttp.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationSetting,
      headersMapper: Mappers.GeneratedClientDeleteKeyValueHeaders
    },
    204: {
      headersMapper: Mappers.GeneratedClientDeleteKeyValueHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch
  ],
  serializer
};
const checkKeyValueOperationSpec: coreHttp.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.GeneratedClientCheckKeyValueHeaders
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion, Parameters.label, Parameters.select],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const getLabelsOperationSpec: coreHttp.OperationSpec = {
  path: "/labels",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LabelListResult,
      headersMapper: Mappers.GeneratedClientGetLabelsHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select1
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept4
  ],
  serializer
};
const checkLabelsOperationSpec: coreHttp.OperationSpec = {
  path: "/labels",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.GeneratedClientCheckLabelsHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select1
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const putLockOperationSpec: coreHttp.OperationSpec = {
  path: "/locks/{key}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationSetting,
      headersMapper: Mappers.GeneratedClientPutLockHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const deleteLockOperationSpec: coreHttp.OperationSpec = {
  path: "/locks/{key}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationSetting,
      headersMapper: Mappers.GeneratedClientDeleteLockHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept2,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const getRevisionsOperationSpec: coreHttp.OperationSpec = {
  path: "/revisions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.GeneratedClientGetRevisionsHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
const checkRevisionsOperationSpec: coreHttp.OperationSpec = {
  path: "/revisions",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.GeneratedClientCheckRevisionsHeaders
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer
};
const getKeysNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyListResult,
      headersMapper: Mappers.GeneratedClientGetKeysNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.syncToken,
    Parameters.acceptDatetime
  ],
  serializer
};
const getKeyValuesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.GeneratedClientGetKeyValuesNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
const getLabelsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LabelListResult,
      headersMapper: Mappers.GeneratedClientGetLabelsNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select1
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept4
  ],
  serializer
};
const getRevisionsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.GeneratedClientGetRevisionsNextHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select
  ],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1
  ],
  serializer
};
