let nock = require('nock');

module.exports.hash = "aae9f0599658051c35e43696394e8c9b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.1/custom/models')
  .query(true)
  .reply(200, {"modelList":[{"modelId":"024ac278-f0ca-4d20-94b3-2c21b78ddaeb","modelName":"modelName160409150354403307","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:58:24Z","lastUpdatedDateTime":"2020-10-30T20:58:26Z"},{"modelId":"058a6549-10d1-4d27-b964-c30016d783d8","status":"ready","createdDateTime":"2020-10-30T22:27:49Z","lastUpdatedDateTime":"2020-10-30T22:28:05Z"},{"modelId":"09a2c5b1-84b2-4ca1-b3ae-b176768e38d8","modelName":"copyModelName160409671913709414","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:25:19Z","lastUpdatedDateTime":"2020-10-30T22:25:21Z"},{"modelId":"0b287dc6-1c73-4230-965c-83b10e298c57","status":"ready","createdDateTime":"2020-10-30T22:27:21Z","lastUpdatedDateTime":"2020-10-30T22:27:37Z"},{"modelId":"0f03a13b-2fdd-4a48-9b9d-52849b15f2e4","modelName":"copyModelName160409083179803592","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:47:12Z","lastUpdatedDateTime":"2020-10-30T20:47:15Z"},{"modelId":"149d1e85-abf6-424e-8413-8eef509a02c8","modelName":"modelName160409111907201817","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:51:59Z","lastUpdatedDateTime":"2020-10-30T20:52:02Z"},{"modelId":"168d3fa1-1d35-44af-a932-4271ae1b5921","modelName":"copyModelName160409101383208799","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:50:14Z","lastUpdatedDateTime":"2020-10-30T20:50:15Z"},{"modelId":"199a2805-6bda-472f-bf0b-fac040bcc3bc","status":"ready","createdDateTime":"2020-10-30T21:01:24Z","lastUpdatedDateTime":"2020-10-30T21:01:41Z"},{"modelId":"19e4335e-bbf6-4a9c-9dda-643c2dd06b41","modelName":"copyModelName160409086557405988","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:47:46Z","lastUpdatedDateTime":"2020-10-30T20:47:48Z"},{"modelId":"1dc06117-811a-4f2d-992a-5e0313064de7","modelName":"copyModelName160408969674208348","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:28:17Z","lastUpdatedDateTime":"2020-10-30T20:28:19Z"},{"modelId":"1f874276-43b7-46ed-9fa2-1cbe37069599","modelName":"copyModelName160409097632102762","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:49:37Z","lastUpdatedDateTime":"2020-10-30T20:49:39Z"},{"modelId":"20bc9ad7-939f-4c8f-9143-44f1b034dbdd","modelName":"copyModelName160409101383208799","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:50:14Z","lastUpdatedDateTime":"2020-10-30T20:50:15Z"},{"modelId":"22c4f8d3-2fbc-4161-83dd-c4c07549829e","modelName":"copyModelName160408812211709531","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:02:02Z","lastUpdatedDateTime":"2020-10-30T20:02:05Z"},{"modelId":"2ad29bde-d86e-44fa-b6f2-ed8ace16cf06","modelName":"copyModelName160408926540607775","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:21:05Z","lastUpdatedDateTime":"2020-10-30T20:21:07Z"},{"modelId":"3440db6d-3409-43e6-bbfb-fa29bfa8b04b","modelName":"copyModelName160408913054003007","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:18:51Z","lastUpdatedDateTime":"2020-10-30T20:18:53Z"},{"modelId":"3ad6a6fc-27e8-4498-8932-7a5ae648ce4b","modelName":"copyModelName160408950628707182","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:25:07Z","lastUpdatedDateTime":"2020-10-30T20:25:09Z"},{"modelId":"3ffa2ece-d73d-47a8-b6e4-9a0d66a5a2e2","modelName":"copyModelName160408970901001440","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:28:29Z","lastUpdatedDateTime":"2020-10-30T20:28:31Z"},{"modelId":"49f3c146-8bae-417b-8474-97a56b6313f7","status":"ready","createdDateTime":"2020-10-30T22:26:21Z","lastUpdatedDateTime":"2020-10-30T22:26:38Z"},{"modelId":"4bda61a6-227a-4844-8a80-5afd8270bca2","status":"ready","createdDateTime":"2020-10-30T21:00:56Z","lastUpdatedDateTime":"2020-10-30T21:01:09Z"},{"modelId":"5149f019-f639-4d64-92c5-2925259ec94b","status":"ready","createdDateTime":"2020-10-30T21:04:51Z","lastUpdatedDateTime":"2020-10-30T21:05:06Z"},{"modelId":"54100123-8111-44bb-92bb-1c19e73e8886","modelName":"copyModelName160408823813003859","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:03:58Z","lastUpdatedDateTime":"2020-10-30T20:04:00Z"},{"modelId":"54663f62-5ab4-41ca-bff0-02113606c761","modelName":"copyModelName160409086557405988","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:47:46Z","lastUpdatedDateTime":"2020-10-30T20:47:48Z"},{"modelId":"55bf6148-3e0a-41a1-87f9-79a47cd89224","modelName":"copyModelName160409230180303916","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T21:11:42Z","lastUpdatedDateTime":"2020-10-30T21:11:44Z"},{"modelId":"59a48030-a88c-439b-bf3e-19c8446b77c9","modelName":"modelName160409675137509575","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:25:51Z","lastUpdatedDateTime":"2020-10-30T22:25:53Z"},{"modelId":"6127a119-badf-409c-a7e5-9e426805d1dd","modelName":"copyModelName160409083179803592","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:47:12Z","lastUpdatedDateTime":"2020-10-30T20:47:15Z"},{"modelId":"637342e6-0031-421f-a7b7-585fb5b72e92","modelName":"copyModelName160409230180303916","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T21:11:42Z","lastUpdatedDateTime":"2020-10-30T21:11:44Z"},{"modelId":"73b78fb8-a238-40c8-9de3-f730c94c133d","modelName":"modelName160409148916608128","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:58:10Z","lastUpdatedDateTime":"2020-10-30T20:58:12Z"}],"nextLink":"https://endpoint:443/formrecognizer/v2.1-preview.1/custom/models?nextLink=2!212!MDAwMTEzIXN1YnNjcmlwdGlvbnMvZWUyMWUzMjc5ODU4NDlmNmI4YWM1YTZhMjBhMzBkZTIvbW9kZWxzLzczYjc4ZmI4LWEyMzgtNDBjOC05ZGUzLWY3MzBjOTRjMTMzZC92ZXJzaW9uLXYyLjEtcHJldmlldy4xITAwMDAyOCE5OTk5LTEyLTMxVDIzOjU5OjU5Ljk5OTk5OTlaIQ--"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '149',
  'apim-request-id',
  '77c3fb49-0c14-4af1-878d-95341751ae45',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 30 Oct 2020 22:28:22 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.1/custom/models')
  .query(true)
  .reply(200, {"modelList":[{"modelId":"73b78fb8-a238-40c8-9de3-f730c94c133d","modelName":"modelName160409148916608128","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:58:10Z","lastUpdatedDateTime":"2020-10-30T20:58:12Z"},{"modelId":"7b797b25-588e-4858-881f-2951c9d6b5d0","modelName":"copyModelName160408950628707182","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:25:07Z","lastUpdatedDateTime":"2020-10-30T20:25:09Z"},{"modelId":"7df3e1a2-8233-428a-aeba-a6796ee5ad6f","modelName":"copyModelName160408952460309249","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:25:24Z","lastUpdatedDateTime":"2020-10-30T20:25:26Z"},{"modelId":"80c13f16-6a24-4da5-bb0a-af2974dba817","status":"ready","createdDateTime":"2020-10-30T22:26:54Z","lastUpdatedDateTime":"2020-10-30T22:27:09Z"},{"modelId":"830e1f5e-6763-457c-b016-ba1e7c0e4a6a","status":"ready","createdDateTime":"2020-10-30T21:04:07Z","lastUpdatedDateTime":"2020-10-30T21:04:22Z"},{"modelId":"899d595c-e75c-405e-b735-1eca5cd0b659","modelName":"copyModelName160409652488500190","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:22:06Z","lastUpdatedDateTime":"2020-10-30T22:22:08Z"},{"modelId":"92d6d60b-86db-4fb7-b522-90339606eeaf","modelName":"copyModelName160409671913709414","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:25:19Z","lastUpdatedDateTime":"2020-10-30T22:25:21Z"},{"modelId":"94e98f63-5680-4370-8811-a63c0391fb5b","modelName":"copyModelName160408926540607775","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:21:05Z","lastUpdatedDateTime":"2020-10-30T20:21:07Z"},{"modelId":"9ad3ab92-d73a-4994-a71a-45580c72681a","modelName":"copyModelName160408823813003859","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:03:58Z","lastUpdatedDateTime":"2020-10-30T20:04:00Z"},{"modelId":"9c7c965f-a895-4903-b108-64bb6a1724c7","modelName":"copyModelName160408969674208348","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:28:17Z","lastUpdatedDateTime":"2020-10-30T20:28:19Z"},{"modelId":"9e13610e-2904-4a6a-8e3b-a77697b808a1","modelName":"copyModelName160408952460309249","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:25:24Z","lastUpdatedDateTime":"2020-10-30T20:25:26Z"},{"modelId":"ac5591bb-a113-460c-9a57-0c9dc536cbb2","modelName":"copyModelName160409210418600668","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T21:08:24Z","lastUpdatedDateTime":"2020-10-30T21:08:26Z"},{"modelId":"af40701b-3749-464d-90d4-82d56d2e9f29","modelName":"copyModelName160408812211709531","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:02:02Z","lastUpdatedDateTime":"2020-10-30T20:02:05Z"},{"modelId":"d759d906-f187-4e97-8cbc-f72a3b3c5807","modelName":"copyModelName160409210418600668","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T21:08:24Z","lastUpdatedDateTime":"2020-10-30T21:08:26Z"},{"modelId":"e1cd58db-274a-4c3a-8efe-14e59fb151d8","modelName":"copyModelName160409652488500190","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:22:06Z","lastUpdatedDateTime":"2020-10-30T22:22:08Z"},{"modelId":"e885bbd2-92c2-4d4a-8805-2ee9f3f1e55b","modelName":"modelName160409676352304685","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:26:03Z","lastUpdatedDateTime":"2020-10-30T22:26:05Z"},{"modelId":"ed4f3d6c-a892-4916-a9f9-87028660e6e7","modelName":"copyModelName160408970901001440","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:28:29Z","lastUpdatedDateTime":"2020-10-30T20:28:31Z"},{"modelId":"f3670b72-ba1a-4a4b-9aa7-63234d89cfcf","modelName":"copyModelName160409097632102762","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:49:37Z","lastUpdatedDateTime":"2020-10-30T20:49:39Z"},{"modelId":"f92771a8-e2eb-4dc0-8444-113fcbcd9301","modelName":"copyModelName160408913054003007","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:18:51Z","lastUpdatedDateTime":"2020-10-30T20:18:53Z"}],"nextLink":""}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '123',
  'apim-request-id',
  'ce06e65f-84f9-4b0b-9207-9c93a5d84311',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 30 Oct 2020 22:28:22 GMT'
]);
