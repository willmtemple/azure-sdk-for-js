// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export { AzureKeyCredential } from "@azure/core-auth";

export {
  TextAnalyticsClient,
  TextAnalyticsClientOptions,
  DetectLanguageOptions,
  RecognizeCategorizedEntitiesOptions,
  AnalyzeSentimentOptions,
  ExtractKeyPhrasesOptions,
  RecognizeLinkedEntitiesOptions,
  TextAnalyticsOperationOptions
} from "./textAnalyticsClient";
export {
  DetectLanguageResult,
  DetectLanguageErrorResult,
  DetectLanguageSuccessResult
} from "./detectLanguageResult";
export { DetectLanguageResultCollection } from "./detectLanguageResultCollection";
export {
  CategorizedEntity,
  RecognizeCategorizedEntitiesResult,
  RecognizeCategorizedEntitiesErrorResult,
  RecognizeCategorizedEntitiesSuccessResult
} from "./recognizeCategorizedEntitiesResult";
export { RecognizeCategorizedEntitiesResultCollection } from "./recognizeCategorizedEntitiesResultCollection";
export {
  AnalyzeSentimentResult,
  AnalyzeSentimentErrorResult,
  AnalyzeSentimentSuccessResult
} from "./analyzeSentimentResult";
export { AnalyzeSentimentResultCollection } from "./analyzeSentimentResultCollection";
export {
  ExtractKeyPhrasesResult,
  ExtractKeyPhrasesErrorResult,
  ExtractKeyPhrasesSuccessResult
} from "./extractKeyPhrasesResult";
export { ExtractKeyPhrasesResultCollection } from "./extractKeyPhrasesResultCollection";
export {
  RecognizeLinkedEntitiesResult,
  RecognizeLinkedEntitiesErrorResult,
  RecognizeLinkedEntitiesSuccessResult
} from "./recognizeLinkedEntitiesResult";
export { RecognizeLinkedEntitiesResultCollection } from "./recognizeLinkedEntitiesResultCollection";
export {
  TextAnalyticsResult,
  ErrorCode,
  TextAnalyticsError,
  TextAnalyticsErrorResult,
  TextAnalyticsSuccessResult
} from "./textAnalyticsResult";

// Models
export {
  DetectedLanguage,
  TextDocumentStatistics,
  SentimentConfidenceScores,
  MultiLanguageInput as TextDocumentInput,
  LanguageInput as DetectLanguageInput,
  TextDocumentBatchStatistics,
  Entity,
  SentenceSentiment,
  DocumentSentimentLabel,
  SentenceSentimentLabel,
  ErrorCodeValue,
  InnerErrorCodeValue,
  WarningCodeValue,
  LinkedEntity,
  Match,
  TextAnalyticsWarning
} from "./generated/models";
