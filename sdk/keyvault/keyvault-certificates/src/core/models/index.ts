/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/**
 * The object attributes managed by the KeyVault service.
 */
export interface Attributes {
  /**
   * Determines whether the object is enabled.
   */
  enabled?: boolean;
  /**
   * Not before date in UTC.
   */
  notBefore?: Date;
  /**
   * Expiry date in UTC.
   */
  expires?: Date;
  /**
   * Creation time in UTC.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly created?: Date;
  /**
   * Last updated time in UTC.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly updated?: Date;
}

/**
 * The certificate management attributes.
 */
export interface CertificateAttributes extends Attributes {
  /**
   * softDelete data retention days. Value should be >=7 and <=90 when softDelete enabled,
   * otherwise 0.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly recoverableDays?: number;
  /**
   * Reflects the deletion recovery level currently in effect for certificates in the current
   * vault. If it contains 'Purgeable', the certificate can be permanently deleted by a privileged
   * user; otherwise, only the system can purge the certificate, at the end of the retention
   * interval. Possible values include: 'Purgeable', 'Recoverable+Purgeable', 'Recoverable',
   * 'Recoverable+ProtectedSubscription', 'CustomizedRecoverable+Purgeable',
   * 'CustomizedRecoverable', 'CustomizedRecoverable+ProtectedSubscription'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly recoveryLevel?: DeletionRecoveryLevel;
}

/**
 * The certificate item containing certificate metadata.
 */
export interface CertificateItem {
  /**
   * Certificate identifier.
   */
  id?: string;
  /**
   * The certificate management attributes.
   */
  attributes?: CertificateAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
  /**
   * Thumbprint of the certificate.
   */
  x509Thumbprint?: Uint8Array;
}

/**
 * The certificate issuer item containing certificate issuer metadata.
 */
export interface CertificateIssuerItem {
  /**
   * Certificate Identifier.
   */
  id?: string;
  /**
   * The issuer provider.
   */
  provider?: string;
}

/**
 * Properties of the key pair backing a certificate.
 */
export interface KeyProperties {
  /**
   * Indicates if the private key can be exported.
   */
  exportable?: boolean;
  /**
   * The type of key pair to be used for the certificate. Possible values include: 'EC', 'EC-HSM',
   * 'RSA', 'RSA-HSM', 'oct'
   */
  keyType?: JsonWebKeyType;
  /**
   * The key size in bits. For example: 2048, 3072, or 4096 for RSA.
   */
  keySize?: number;
  /**
   * Indicates if the same key pair will be used on certificate renewal.
   */
  reuseKey?: boolean;
  /**
   * Elliptic curve name. For valid values, see JsonWebKeyCurveName. Possible values include:
   * 'P-256', 'P-384', 'P-521', 'P-256K'
   */
  curve?: JsonWebKeyCurveName;
}

/**
 * Properties of the key backing a certificate.
 */
export interface SecretProperties {
  /**
   * The media type (MIME type).
   */
  contentType?: string;
}

/**
 * The subject alternate names of a X509 object.
 */
export interface SubjectAlternativeNames {
  /**
   * Email addresses.
   */
  emails?: string[];
  /**
   * Domain names.
   */
  dnsNames?: string[];
  /**
   * User principal names.
   */
  upns?: string[];
}

/**
 * Properties of the X509 component of a certificate.
 */
export interface X509CertificateProperties {
  /**
   * The subject name. Should be a valid X509 distinguished Name.
   */
  subject?: string;
  /**
   * The enhanced key usage.
   */
  ekus?: string[];
  /**
   * The subject alternative names.
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
  /**
   * List of key usages.
   */
  keyUsage?: KeyUsageType[];
  /**
   * The duration that the certificate is valid in months.
   */
  validityInMonths?: number;
}

/**
 * A condition to be satisfied for an action to be executed.
 */
export interface Trigger {
  /**
   * Percentage of lifetime at which to trigger. Value should be between 1 and 99.
   */
  lifetimePercentage?: number;
  /**
   * Days before expiry to attempt renewal. Value should be between 1 and validity_in_months
   * multiplied by 27. If validity_in_months is 36, then value should be between 1 and 972 (36 *
   * 27).
   */
  daysBeforeExpiry?: number;
}

/**
 * The action that will be executed.
 */
export interface Action {
  /**
   * The type of the action. Possible values include: 'EmailContacts', 'AutoRenew'
   */
  actionType?: ActionType;
}

/**
 * Action and its trigger that will be performed by Key Vault over the lifetime of a certificate.
 */
export interface LifetimeAction {
  /**
   * The condition that will execute the action.
   */
  trigger?: Trigger;
  /**
   * The action that will be executed.
   */
  action?: Action;
}

/**
 * Parameters for the issuer of the X509 component of a certificate.
 */
export interface IssuerParameters {
  /**
   * Name of the referenced issuer object or reserved names; for example, 'Self' or 'Unknown'.
   */
  name?: string;
  /**
   * Certificate type as supported by the provider (optional); for example 'OV-SSL', 'EV-SSL'
   */
  certificateType?: string;
  /**
   * Indicates if the certificates generated under this policy should be published to certificate
   * transparency logs.
   */
  certificateTransparency?: boolean;
}

/**
 * Management policy for a certificate.
 */
export interface CertificatePolicy {
  /**
   * The certificate id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Properties of the key backing a certificate.
   */
  keyProperties?: KeyProperties;
  /**
   * Properties of the secret backing a certificate.
   */
  secretProperties?: SecretProperties;
  /**
   * Properties of the X509 component of a certificate.
   */
  x509CertificateProperties?: X509CertificateProperties;
  /**
   * Actions that will be performed by Key Vault over the lifetime of a certificate.
   */
  lifetimeActions?: LifetimeAction[];
  /**
   * Parameters for the issuer of the X509 component of a certificate.
   */
  issuerParameters?: IssuerParameters;
  /**
   * The certificate attributes.
   */
  attributes?: CertificateAttributes;
}

/**
 * A certificate bundle consists of a certificate (X509) plus its attributes.
 */
export interface CertificateBundle {
  /**
   * The certificate id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The key id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly kid?: string;
  /**
   * The secret id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly sid?: string;
  /**
   * Thumbprint of the certificate.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly x509Thumbprint?: Uint8Array;
  /**
   * The management policy.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly policy?: CertificatePolicy;
  /**
   * CER contents of x509 certificate.
   */
  cer?: Uint8Array;
  /**
   * The content type of the secret.
   */
  contentType?: string;
  /**
   * The certificate attributes.
   */
  attributes?: CertificateAttributes;
  /**
   * Application specific metadata in the form of key-value pairs
   */
  tags?: { [propertyName: string]: string };
}

/**
 * A Deleted Certificate consisting of its previous id, attributes and its tags, as well as
 * information on when it will be purged.
 */
export interface DeletedCertificateBundle extends CertificateBundle {
  /**
   * The url of the recovery object, used to identify and recover the deleted certificate.
   */
  recoveryId?: string;
  /**
   * The time when the certificate is scheduled to be purged, in UTC
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly scheduledPurgeDate?: Date;
  /**
   * The time when the certificate was deleted, in UTC
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly deletedDate?: Date;
}

/**
 * The deleted certificate item containing metadata about the deleted certificate.
 */
export interface DeletedCertificateItem extends CertificateItem {
  /**
   * The url of the recovery object, used to identify and recover the deleted certificate.
   */
  recoveryId?: string;
  /**
   * The time when the certificate is scheduled to be purged, in UTC
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly scheduledPurgeDate?: Date;
  /**
   * The time when the certificate was deleted, in UTC
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly deletedDate?: Date;
}

/**
 * The key vault server error.
 */
export interface ErrorModel {
  /**
   * The error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * The error message.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly innerError?: ErrorModel;
}

/**
 * A certificate operation is returned in case of asynchronous requests.
 */
export interface CertificateOperation {
  /**
   * The certificate id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Parameters for the issuer of the X509 component of a certificate.
   */
  issuerParameters?: IssuerParameters;
  /**
   * The certificate signing request (CSR) that is being used in the certificate operation.
   */
  csr?: Uint8Array;
  /**
   * Indicates if cancellation was requested on the certificate operation.
   */
  cancellationRequested?: boolean;
  /**
   * Status of the certificate operation.
   */
  status?: string;
  /**
   * The status details of the certificate operation.
   */
  statusDetails?: string;
  /**
   * Error encountered, if any, during the certificate operation.
   */
  error?: ErrorModel;
  /**
   * Location which contains the result of the certificate operation.
   */
  target?: string;
  /**
   * Identifier for the certificate operation.
   */
  requestId?: string;
}

/**
 * The credentials to be used for the certificate issuer.
 */
export interface IssuerCredentials {
  /**
   * The user name/account name/account id.
   */
  accountId?: string;
  /**
   * The password/secret/account key.
   */
  password?: string;
}

/**
 * Details of the organization administrator of the certificate issuer.
 */
export interface AdministratorDetails {
  /**
   * First name.
   */
  firstName?: string;
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * Email address.
   */
  emailAddress?: string;
  /**
   * Phone number.
   */
  phone?: string;
}

/**
 * Details of the organization of the certificate issuer.
 */
export interface OrganizationDetails {
  /**
   * Id of the organization.
   */
  id?: string;
  /**
   * Details of the organization administrator.
   */
  adminDetails?: AdministratorDetails[];
}

/**
 * The attributes of an issuer managed by the Key Vault service.
 */
export interface IssuerAttributes {
  /**
   * Determines whether the issuer is enabled.
   */
  enabled?: boolean;
  /**
   * Creation time in UTC.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly created?: Date;
  /**
   * Last updated time in UTC.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly updated?: Date;
}

/**
 * The issuer for Key Vault certificate.
 */
export interface IssuerBundle {
  /**
   * Identifier for the issuer object.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The issuer provider.
   */
  provider?: string;
  /**
   * The credentials to be used for the issuer.
   */
  credentials?: IssuerCredentials;
  /**
   * Details of the organization as provided to the issuer.
   */
  organizationDetails?: OrganizationDetails;
  /**
   * Attributes of the issuer object.
   */
  attributes?: IssuerAttributes;
}

/**
 * The contact information for the vault certificates.
 */
export interface Contact {
  /**
   * Email address.
   */
  emailAddress?: string;
  /**
   * Name.
   */
  name?: string;
  /**
   * Phone number.
   */
  phone?: string;
}

/**
 * The contacts for the vault certificates.
 */
export interface Contacts {
  /**
   * Identifier for the contacts collection.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The contact list for the vault certificates.
   */
  contactList?: Contact[];
}

/**
 * The certificate create parameters.
 */
export interface CertificateCreateParameters {
  /**
   * The management policy for the certificate.
   */
  certificatePolicy?: CertificatePolicy;
  /**
   * The attributes of the certificate (optional).
   */
  certificateAttributes?: CertificateAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The certificate import parameters.
 */
export interface CertificateImportParameters {
  /**
   * Base64 encoded representation of the certificate object to import. This certificate needs to
   * contain the private key.
   */
  base64EncodedCertificate: string;
  /**
   * If the private key in base64EncodedCertificate is encrypted, the password used for encryption.
   */
  password?: string;
  /**
   * The management policy for the certificate.
   */
  certificatePolicy?: CertificatePolicy;
  /**
   * The attributes of the certificate (optional).
   */
  certificateAttributes?: CertificateAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The certificate update parameters.
 */
export interface CertificateUpdateParameters {
  /**
   * The management policy for the certificate.
   */
  certificatePolicy?: CertificatePolicy;
  /**
   * The attributes of the certificate (optional).
   */
  certificateAttributes?: CertificateAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The certificate merge parameters
 */
export interface CertificateMergeParameters {
  /**
   * The certificate or the certificate chain to merge.
   */
  x509Certificates: Uint8Array[];
  /**
   * The attributes of the certificate (optional).
   */
  certificateAttributes?: CertificateAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * The certificate issuer set parameters.
 */
export interface CertificateIssuerSetParameters {
  /**
   * The issuer provider.
   */
  provider: string;
  /**
   * The credentials to be used for the issuer.
   */
  credentials?: IssuerCredentials;
  /**
   * Details of the organization as provided to the issuer.
   */
  organizationDetails?: OrganizationDetails;
  /**
   * Attributes of the issuer object.
   */
  attributes?: IssuerAttributes;
}

/**
 * The certificate issuer update parameters.
 */
export interface CertificateIssuerUpdateParameters {
  /**
   * The issuer provider.
   */
  provider?: string;
  /**
   * The credentials to be used for the issuer.
   */
  credentials?: IssuerCredentials;
  /**
   * Details of the organization as provided to the issuer.
   */
  organizationDetails?: OrganizationDetails;
  /**
   * Attributes of the issuer object.
   */
  attributes?: IssuerAttributes;
}

/**
 * The certificate operation update parameters.
 */
export interface CertificateOperationUpdateParameter {
  /**
   * Indicates if cancellation was requested on the certificate operation.
   */
  cancellationRequested: boolean;
}

/**
 * The certificate list result.
 */
export interface CertificateListResult {
  /**
   * A response message containing a list of certificates in the key vault along with a link to the
   * next page of certificates.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: CertificateItem[];
  /**
   * The URL to get the next set of certificates.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * A list of certificates that have been deleted in this vault.
 */
export interface DeletedCertificateListResult {
  /**
   * A response message containing a list of deleted certificates in the vault along with a link to
   * the next page of deleted certificates
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: DeletedCertificateItem[];
  /**
   * The URL to get the next set of deleted certificates.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * The certificate issuer list result.
 */
export interface CertificateIssuerListResult {
  /**
   * A response message containing a list of certificate issuers in the key vault along with a link
   * to the next page of certificate issuers.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: CertificateIssuerItem[];
  /**
   * The URL to get the next set of certificate issuers.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * The pending certificate signing request result.
 */
export interface PendingCertificateSigningRequestResult {
  /**
   * The pending certificate signing request as Base64 encoded string.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: string;
}

/**
 * The certificate restore parameters.
 */
export interface CertificateRestoreParameters {
  /**
   * The backup blob associated with a certificate bundle.
   */
  certificateBundleBackup: Uint8Array;
}

/**
 * The backup certificate result, containing the backup blob.
 */
export interface BackupCertificateResult {
  /**
   * The backup blob containing the backed up certificate.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly value?: Uint8Array;
}

/**
 * The key vault error exception.
 */
export interface KeyVaultError {
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly error?: ErrorModel;
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientGetCertificatesOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * Maximum number of results to return in a page. If not specified the service will return up to
   * 25 results.
   */
  maxresults?: number;
  /**
   * Specifies whether to include certificates which are not completely provisioned.
   */
  includePending?: boolean;
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientGetCertificateIssuersOptionalParams
  extends coreHttp.RequestOptionsBase {
  /**
   * Maximum number of results to return in a page. If not specified the service will return up to
   * 25 results.
   */
  maxresults?: number;
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientSetCertificateIssuerOptionalParams
  extends coreHttp.RequestOptionsBase {
  /**
   * The credentials to be used for the issuer.
   */
  credentials?: IssuerCredentials;
  /**
   * Details of the organization as provided to the issuer.
   */
  organizationDetails?: OrganizationDetails;
  /**
   * Attributes of the issuer object.
   */
  attributes?: IssuerAttributes;
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientUpdateCertificateIssuerOptionalParams
  extends coreHttp.RequestOptionsBase {
  /**
   * The issuer provider.
   */
  provider?: string;
  /**
   * The credentials to be used for the issuer.
   */
  credentials?: IssuerCredentials;
  /**
   * Details of the organization as provided to the issuer.
   */
  organizationDetails?: OrganizationDetails;
  /**
   * Attributes of the issuer object.
   */
  attributes?: IssuerAttributes;
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientCreateCertificateOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * The management policy for the certificate.
   */
  certificatePolicy?: CertificatePolicy;
  /**
   * The attributes of the certificate (optional).
   */
  certificateAttributes?: CertificateAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientImportCertificateOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * If the private key in base64EncodedCertificate is encrypted, the password used for encryption.
   */
  password?: string;
  /**
   * The management policy for the certificate.
   */
  certificatePolicy?: CertificatePolicy;
  /**
   * The attributes of the certificate (optional).
   */
  certificateAttributes?: CertificateAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientGetCertificateVersionsOptionalParams
  extends coreHttp.RequestOptionsBase {
  /**
   * Maximum number of results to return in a page. If not specified the service will return up to
   * 25 results.
   */
  maxresults?: number;
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientUpdateCertificateOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * The management policy for the certificate.
   */
  certificatePolicy?: CertificatePolicy;
  /**
   * The attributes of the certificate (optional).
   */
  certificateAttributes?: CertificateAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientMergeCertificateOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * The attributes of the certificate (optional).
   */
  certificateAttributes?: CertificateAttributes;
  /**
   * Application specific metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Optional Parameters.
 */
export interface KeyVaultClientGetDeletedCertificatesOptionalParams
  extends coreHttp.RequestOptionsBase {
  /**
   * Maximum number of results to return in a page. If not specified the service will return up to
   * 25 results.
   */
  maxresults?: number;
  /**
   * Specifies whether to include certificates which are not completely provisioned.
   */
  includePending?: boolean;
}

/**
 * Defines values for DeletionRecoveryLevel.
 * Possible values include: 'Purgeable', 'Recoverable+Purgeable', 'Recoverable',
 * 'Recoverable+ProtectedSubscription', 'CustomizedRecoverable+Purgeable', 'CustomizedRecoverable',
 * 'CustomizedRecoverable+ProtectedSubscription'
 * @readonly
 * @enum {string}
 */
export type DeletionRecoveryLevel =
  | "Purgeable"
  | "Recoverable+Purgeable"
  | "Recoverable"
  | "Recoverable+ProtectedSubscription"
  | "CustomizedRecoverable+Purgeable"
  | "CustomizedRecoverable"
  | "CustomizedRecoverable+ProtectedSubscription";

/**
 * Defines values for JsonWebKeyType.
 * Possible values include: 'EC', 'EC-HSM', 'RSA', 'RSA-HSM', 'oct'
 * @readonly
 * @enum {string}
 */
export type JsonWebKeyType = "EC" | "EC-HSM" | "RSA" | "RSA-HSM" | "oct";

/**
 * Defines values for JsonWebKeyCurveName.
 * Possible values include: 'P-256', 'P-384', 'P-521', 'P-256K'
 * @readonly
 * @enum {string}
 */
export type JsonWebKeyCurveName = "P-256" | "P-384" | "P-521" | "P-256K";

/**
 * Defines values for KeyUsageType.
 * Possible values include: 'digitalSignature', 'nonRepudiation', 'keyEncipherment',
 * 'dataEncipherment', 'keyAgreement', 'keyCertSign', 'cRLSign', 'encipherOnly', 'decipherOnly'
 * @readonly
 * @enum {string}
 */
export type KeyUsageType =
  | "digitalSignature"
  | "nonRepudiation"
  | "keyEncipherment"
  | "dataEncipherment"
  | "keyAgreement"
  | "keyCertSign"
  | "cRLSign"
  | "encipherOnly"
  | "decipherOnly";

/**
 * Defines values for ActionType.
 * Possible values include: 'EmailContacts', 'AutoRenew'
 * @readonly
 * @enum {string}
 */
export type ActionType = "EmailContacts" | "AutoRenew";

/**
 * Contains response data for the getCertificates operation.
 */
export type GetCertificatesResponse = CertificateListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateListResult;
  };
};

/**
 * Contains response data for the deleteCertificate operation.
 */
export type DeleteCertificateResponse = DeletedCertificateBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeletedCertificateBundle;
  };
};

/**
 * Contains response data for the setCertificateContacts operation.
 */
export type SetCertificateContactsResponse = Contacts & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Contacts;
  };
};

/**
 * Contains response data for the getCertificateContacts operation.
 */
export type GetCertificateContactsResponse = Contacts & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Contacts;
  };
};

/**
 * Contains response data for the deleteCertificateContacts operation.
 */
export type DeleteCertificateContactsResponse = Contacts & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: Contacts;
  };
};

/**
 * Contains response data for the getCertificateIssuers operation.
 */
export type GetCertificateIssuersResponse = CertificateIssuerListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateIssuerListResult;
  };
};

/**
 * Contains response data for the setCertificateIssuer operation.
 */
export type SetCertificateIssuerResponse = IssuerBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: IssuerBundle;
  };
};

/**
 * Contains response data for the updateCertificateIssuer operation.
 */
export type UpdateCertificateIssuerResponse = IssuerBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: IssuerBundle;
  };
};

/**
 * Contains response data for the getCertificateIssuer operation.
 */
export type GetCertificateIssuerResponse = IssuerBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: IssuerBundle;
  };
};

/**
 * Contains response data for the deleteCertificateIssuer operation.
 */
export type DeleteCertificateIssuerResponse = IssuerBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: IssuerBundle;
  };
};

/**
 * Contains response data for the createCertificate operation.
 */
export type CreateCertificateResponse = CertificateOperation & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateOperation;
  };
};

/**
 * Contains response data for the importCertificate operation.
 */
export type ImportCertificateResponse = CertificateBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateBundle;
  };
};

/**
 * Contains response data for the getCertificateVersions operation.
 */
export type GetCertificateVersionsResponse = CertificateListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateListResult;
  };
};

/**
 * Contains response data for the getCertificatePolicy operation.
 */
export type GetCertificatePolicyResponse = CertificatePolicy & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificatePolicy;
  };
};

/**
 * Contains response data for the updateCertificatePolicy operation.
 */
export type UpdateCertificatePolicyResponse = CertificatePolicy & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificatePolicy;
  };
};

/**
 * Contains response data for the updateCertificate operation.
 */
export type UpdateCertificateResponse = CertificateBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateBundle;
  };
};

/**
 * Contains response data for the getCertificate operation.
 */
export type GetCertificateResponse = CertificateBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateBundle;
  };
};

/**
 * Contains response data for the updateCertificateOperation operation.
 */
export type UpdateCertificateOperationResponse = CertificateOperation & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateOperation;
  };
};

/**
 * Contains response data for the getCertificateOperation operation.
 */
export type GetCertificateOperationResponse = CertificateOperation & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateOperation;
  };
};

/**
 * Contains response data for the deleteCertificateOperation operation.
 */
export type DeleteCertificateOperationResponse = CertificateOperation & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateOperation;
  };
};

/**
 * Contains response data for the mergeCertificate operation.
 */
export type MergeCertificateResponse = CertificateBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateBundle;
  };
};

/**
 * Contains response data for the backupCertificate operation.
 */
export type BackupCertificateResponse = BackupCertificateResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: BackupCertificateResult;
  };
};

/**
 * Contains response data for the restoreCertificate operation.
 */
export type RestoreCertificateResponse = CertificateBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateBundle;
  };
};

/**
 * Contains response data for the getDeletedCertificates operation.
 */
export type GetDeletedCertificatesResponse = DeletedCertificateListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeletedCertificateListResult;
  };
};

/**
 * Contains response data for the getDeletedCertificate operation.
 */
export type GetDeletedCertificateResponse = DeletedCertificateBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: DeletedCertificateBundle;
  };
};

/**
 * Contains response data for the recoverDeletedCertificate operation.
 */
export type RecoverDeletedCertificateResponse = CertificateBundle & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CertificateBundle;
  };
};
