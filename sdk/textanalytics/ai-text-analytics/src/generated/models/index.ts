/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */


import * as coreHttp from "@azure/core-http";

/**
 * Contains an input document to be analyzed by the service.
 */
export interface MultiLanguageInput {
  /**
   * A unique, non-empty document identifier.
   */
  id: string;
  /**
   * The input text to process.
   */
  text: string;
  /**
   * (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en"
   * for English; "es" for Spanish etc. If not set, use "en" for English as default.
   */
  language?: string;
}

/**
 * Contains a set of input documents to be analyzed by the service.
 */
export interface MultiLanguageBatchInput {
  /**
   * The set of documents to process as part of this batch.
   */
  documents: MultiLanguageInput[];
}

/**
 * An interface representing InnerError.
 */
export interface InnerError {
  /**
   * Error code. Possible values include: 'InvalidParameterValue', 'InvalidRequestBodyFormat',
   * 'EmptyRequest', 'MissingInputRecords', 'InvalidDocument', 'ModelVersionIncorrect',
   * 'InvalidDocumentBatch', 'UnsupportedLanguageCode', 'InvalidCountryHint'
   */
  code: InnerErrorCodeValue;
  /**
   * Error message.
   */
  message: string;
  /**
   * Error details.
   */
  details?: { [propertyName: string]: string };
  /**
   * Error target.
   */
  target?: string;
  /**
   * Inner error contains more specific information.
   */
  innerError?: InnerError;
}

/**
 * An interface representing TextAnalyticsError.
 */
export interface TextAnalyticsError {
  /**
   * Error code. Possible values include: 'InvalidRequest', 'InvalidArgument',
   * 'InternalServerError', 'ServiceUnavailable'
   */
  code: ErrorCodeValue;
  /**
   * Error message.
   */
  message: string;
  /**
   * Error target.
   */
  target?: string;
  /**
   * Inner error contains more specific information.
   */
  innerError?: InnerError;
  /**
   * Details about specific errors that led to this reported error.
   */
  details?: TextAnalyticsError[];
}

/**
 * An interface representing DocumentError.
 */
export interface DocumentError {
  /**
   * Document Id.
   */
  id: string;
  /**
   * Document Error.
   */
  error: TextAnalyticsError;
}

/**
 * if showStats=true was specified in the request this field will contain information about the
 * document payload.
 */
export interface TextDocumentStatistics {
  /**
   * Number of text elements recognized in the document.
   */
  characterCount: number;
  /**
   * Number of transactions for the document.
   */
  transactionCount: number;
}

/**
 * Represents the confidence scores between 0 and 1 across all sentiment classes: positive,
 * neutral, negative.
 */
export interface SentimentScorePerLabel {
  positive: number;
  neutral: number;
  negative: number;
}

/**
 * An interface representing SentenceSentiment.
 */
export interface SentenceSentiment {
  /**
   * The predicted Sentiment for the sentence. Possible values include: 'positive', 'neutral',
   * 'negative'
   */
  sentiment: SentenceSentimentLabel;
  /**
   * The sentiment confidence score between 0 and 1 for the sentence for all classes.
   */
  sentimentScores: SentimentScorePerLabel;
  /**
   * The sentence offset from the start of the document.
   */
  graphemeOffset: number;
  /**
   * The length of the sentence by Unicode standard.
   */
  length: number;
  /**
   * The warnings generated for the sentence.
   */
  warnings?: string[];
}

/**
 * An interface representing DocumentSentiment.
 */
export interface DocumentSentiment {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  /**
   * Predicted sentiment for document (Negative, Neutral, Positive, or Mixed). Possible values
   * include: 'positive', 'neutral', 'negative', 'mixed'
   */
  sentiment: DocumentSentimentLabel;
  statistics?: TextDocumentStatistics;
  /**
   * Document level sentiment confidence scores between 0 and 1 for each sentiment class.
   */
  documentScores: SentimentScorePerLabel;
  /**
   * Sentence level sentiment analysis.
   */
  sentenceSentiments: SentenceSentiment[];
}

/**
 * if showStats=true was specified in the request this field will contain information about the
 * request payload.
 */
export interface TextDocumentBatchStatistics {
  /**
   * Number of documents submitted in the request.
   */
  documentCount: number;
  /**
   * Number of valid documents. This excludes empty, over-size limit or non-supported languages
   * documents.
   */
  validDocumentCount: number;
  /**
   * Number of invalid documents. This includes empty, over-size limit or non-supported languages
   * documents.
   */
  erroneousDocumentCount: number;
  /**
   * Number of transactions for the request.
   */
  transactionCount: number;
}

/**
 * An interface representing SentimentResponse.
 */
export interface SentimentResponse {
  /**
   * Sentiment analysis per document.
   */
  documents: DocumentSentiment[];
  /**
   * Errors by document id.
   */
  errors: DocumentError[];
  statistics?: TextDocumentBatchStatistics;
  /**
   * This field indicates which model is used for scoring.
   */
  modelVersion: string;
}

/**
 * An interface representing Entity.
 */
export interface Entity {
  /**
   * Entity text as appears in the request.
   */
  text: string;
  /**
   * Entity type, such as Person/Location/Org/SSN etc
   */
  category: string;
  /**
   * Entity sub type, such as Age/Year/TimeRange etc
   */
  subCategory?: string;
  /**
   * Start position (in Unicode graphemes) for the entity text.
   */
  graphemeOffset: number;
  /**
   * Length (in Unicode characters) for the entity text.
   */
  length: number;
  /**
   * Confidence score between 0 and 1 of the extracted entity.
   */
  score: number;
}

/**
 * An interface representing DocumentEntities.
 */
export interface DocumentEntities {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  /**
   * Recognized entities in the document.
   */
  entities: Entity[];
  /**
   * if showStats=true was specified in the request this field will contain information about the
   * document payload.
   */
  statistics?: TextDocumentStatistics;
}

/**
 * An interface representing EntitiesResult.
 */
export interface EntitiesResult {
  /**
   * Response by document
   */
  documents: DocumentEntities[];
  /**
   * Errors by document id.
   */
  errors: DocumentError[];
  statistics?: TextDocumentBatchStatistics;
  /**
   * This field indicates which model is used for scoring.
   */
  modelVersion: string;
}

/**
 * An interface representing Match.
 */
export interface Match {
  /**
   * If a well-known item is recognized, a decimal number denoting the confidence level between 0
   * and 1 will be returned.
   */
  score: number;
  /**
   * Entity text as appears in the request.
   */
  text: string;
  /**
   * Start position (in Unicode graphemes) for the entity match text.
   */
  graphemeOffset: number;
  /**
   * Length (in Unicode characters) for the entity match text.
   */
  length: number;
}

/**
 * An interface representing LinkedEntity.
 */
export interface LinkedEntity {
  /**
   * Entity Linking formal name.
   */
  name: string;
  /**
   * List of instances this entity appears in the text.
   */
  matches: Match[];
  /**
   * Language used in the data source.
   */
  language: string;
  /**
   * Unique identifier of the recognized entity from the data source.
   */
  dataSourceEntityId?: string;
  /**
   * URL for the entity's page from the data source.
   */
  url: string;
  /**
   * Data source used to extract entity linking, such as Wiki/Bing etc.
   */
  dataSource: string;
}

/**
 * An interface representing DocumentLinkedEntities.
 */
export interface DocumentLinkedEntities {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  /**
   * Recognized well-known entities in the document.
   */
  entities: LinkedEntity[];
  /**
   * if showStats=true was specified in the request this field will contain information about the
   * document payload.
   */
  statistics?: TextDocumentStatistics;
}

/**
 * An interface representing EntityLinkingResult.
 */
export interface EntityLinkingResult {
  /**
   * Response by document
   */
  documents: DocumentLinkedEntities[];
  /**
   * Errors by document id.
   */
  errors: DocumentError[];
  statistics?: TextDocumentBatchStatistics;
  /**
   * This field indicates which model is used for scoring.
   */
  modelVersion: string;
}

/**
 * An interface representing DocumentKeyPhrases.
 */
export interface DocumentKeyPhrases {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  /**
   * A list of representative words or phrases. The number of key phrases returned is proportional
   * to the number of words in the input document.
   */
  keyPhrases: string[];
  /**
   * if showStats=true was specified in the request this field will contain information about the
   * document payload.
   */
  statistics?: TextDocumentStatistics;
}

/**
 * An interface representing KeyPhraseResult.
 */
export interface KeyPhraseResult {
  /**
   * Response by document
   */
  documents: DocumentKeyPhrases[];
  /**
   * Errors by document id.
   */
  errors: DocumentError[];
  statistics?: TextDocumentBatchStatistics;
  /**
   * This field indicates which model is used for scoring.
   */
  modelVersion: string;
}

/**
 * An interface representing LanguageInput.
 */
export interface LanguageInput {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  text: string;
  countryHint?: string;
}

/**
 * An interface representing LanguageBatchInput.
 */
export interface LanguageBatchInput {
  documents: LanguageInput[];
}

/**
 * An interface representing DetectedLanguage.
 */
export interface DetectedLanguage {
  /**
   * Long name of a detected language (e.g. English, French).
   */
  name: string;
  /**
   * A two letter representation of the detected language according to the ISO 639-1 standard (e.g.
   * en, fr).
   */
  iso6391Name: string;
  /**
   * A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the
   * identified language is true.
   */
  score: number;
}

/**
 * An interface representing DocumentLanguage.
 */
export interface DocumentLanguage {
  /**
   * Unique, non-empty document identifier.
   */
  id: string;
  /**
   * A list of extracted languages.
   */
  detectedLanguages: DetectedLanguage[];
  /**
   * if showStats=true was specified in the request this field will contain information about the
   * document payload.
   */
  statistics?: TextDocumentStatistics;
}

/**
 * An interface representing LanguageResult.
 */
export interface LanguageResult {
  /**
   * Response by document
   */
  documents: DocumentLanguage[];
  /**
   * Errors by document id.
   */
  errors: DocumentError[];
  statistics?: TextDocumentBatchStatistics;
  /**
   * This field indicates which model is used for scoring.
   */
  modelVersion: string;
}

/**
 * Optional Parameters.
 */
export interface TextAnalyticsClientEntitiesRecognitionGeneralOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Optional Parameters.
 */
export interface TextAnalyticsClientEntitiesRecognitionPiiOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Optional Parameters.
 */
export interface TextAnalyticsClientEntitiesLinkingOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Optional Parameters.
 */
export interface TextAnalyticsClientKeyPhrasesOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Optional Parameters.
 */
export interface TextAnalyticsClientLanguagesOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Optional Parameters.
 */
export interface TextAnalyticsClientSentimentOptionalParams extends coreHttp.RequestOptionsBase {
  /**
   * (Optional) This value indicates which model will be used for scoring. If a model-version is
   * not specified, the API should default to the latest, non-preview version.
   */
  modelVersion?: string;
  /**
   * (Optional) if set to true, response will contain input and document level statistics.
   */
  includeStatistics?: boolean;
}

/**
 * Defines values for ErrorCodeValue.
 * Possible values include: 'InvalidRequest', 'InvalidArgument', 'InternalServerError',
 * 'ServiceUnavailable'
 * @readonly
 * @enum {string}
 */
export type ErrorCodeValue = 'InvalidRequest' | 'InvalidArgument' | 'InternalServerError' | 'ServiceUnavailable';

/**
 * Defines values for InnerErrorCodeValue.
 * Possible values include: 'InvalidParameterValue', 'InvalidRequestBodyFormat', 'EmptyRequest',
 * 'MissingInputRecords', 'InvalidDocument', 'ModelVersionIncorrect', 'InvalidDocumentBatch',
 * 'UnsupportedLanguageCode', 'InvalidCountryHint'
 * @readonly
 * @enum {string}
 */
export type InnerErrorCodeValue = 'InvalidParameterValue' | 'InvalidRequestBodyFormat' | 'EmptyRequest' | 'MissingInputRecords' | 'InvalidDocument' | 'ModelVersionIncorrect' | 'InvalidDocumentBatch' | 'UnsupportedLanguageCode' | 'InvalidCountryHint';

/**
 * Defines values for DocumentSentimentLabel.
 * Possible values include: 'positive', 'neutral', 'negative', 'mixed'
 * @readonly
 * @enum {string}
 */
export type DocumentSentimentLabel = 'positive' | 'neutral' | 'negative' | 'mixed';

/**
 * Defines values for SentenceSentimentLabel.
 * Possible values include: 'positive', 'neutral', 'negative'
 * @readonly
 * @enum {string}
 */
export type SentenceSentimentLabel = 'positive' | 'neutral' | 'negative';

/**
 * Contains response data for the entitiesRecognitionGeneral operation.
 */
export type EntitiesRecognitionGeneralResponse = EntitiesResult & {
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
      parsedBody: EntitiesResult;
    };
};

/**
 * Contains response data for the entitiesRecognitionPii operation.
 */
export type EntitiesRecognitionPiiResponse = EntitiesResult & {
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
      parsedBody: EntitiesResult;
    };
};

/**
 * Contains response data for the entitiesLinking operation.
 */
export type EntitiesLinkingResponse = EntityLinkingResult & {
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
      parsedBody: EntityLinkingResult;
    };
};

/**
 * Contains response data for the keyPhrases operation.
 */
export type KeyPhrasesResponse = KeyPhraseResult & {
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
      parsedBody: KeyPhraseResult;
    };
};

/**
 * Contains response data for the languages operation.
 */
export type LanguagesResponse = LanguageResult & {
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
      parsedBody: LanguageResult;
    };
};

/**
 * Contains response data for the sentiment operation.
 */
export type SentimentResponse2 = SentimentResponse & {
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
      parsedBody: SentimentResponse;
    };
};
