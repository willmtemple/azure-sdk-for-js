let nock = require('nock');

module.exports.hash = "0b380ec49ea2252e1bfbaa30e93be775";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.1/custom/models')
  .query(true)
  .reply(200, {"modelList":[{"modelId":"024ac278-f0ca-4d20-94b3-2c21b78ddaeb","modelName":"modelName160409150354403307","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:58:24Z","lastUpdatedDateTime":"2020-10-30T20:58:26Z"},{"modelId":"09a2c5b1-84b2-4ca1-b3ae-b176768e38d8","modelName":"copyModelName160409671913709414","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:25:19Z","lastUpdatedDateTime":"2020-10-30T22:25:21Z"},{"modelId":"0f03a13b-2fdd-4a48-9b9d-52849b15f2e4","modelName":"copyModelName160409083179803592","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:47:12Z","lastUpdatedDateTime":"2020-10-30T20:47:15Z"},{"modelId":"1046daa3-77bd-4bd6-9300-568fe2d403b7","modelName":"copyModelName160409807795906952","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:47:58Z","lastUpdatedDateTime":"2020-10-30T22:47:59Z"},{"modelId":"115bce8b-24c9-406b-b0e4-8607ee72642a","status":"creating","createdDateTime":"2020-10-30T22:37:14Z","lastUpdatedDateTime":"2020-10-30T22:37:14Z"},{"modelId":"149d1e85-abf6-424e-8413-8eef509a02c8","modelName":"modelName160409111907201817","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:51:59Z","lastUpdatedDateTime":"2020-10-30T20:52:02Z"},{"modelId":"168d3fa1-1d35-44af-a932-4271ae1b5921","modelName":"copyModelName160409101383208799","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:50:14Z","lastUpdatedDateTime":"2020-10-30T20:50:15Z"},{"modelId":"18000e70-4e57-4be6-8ed9-45c035ffb74f","modelName":"copyModelName160409797043404430","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:46:10Z","lastUpdatedDateTime":"2020-10-30T22:46:11Z"},{"modelId":"199a2805-6bda-472f-bf0b-fac040bcc3bc","status":"ready","createdDateTime":"2020-10-30T21:01:24Z","lastUpdatedDateTime":"2020-10-30T21:01:41Z"},{"modelId":"19e4335e-bbf6-4a9c-9dda-643c2dd06b41","modelName":"copyModelName160409086557405988","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:47:46Z","lastUpdatedDateTime":"2020-10-30T20:47:48Z"},{"modelId":"1aad4cfd-fef9-4f3f-b3fd-7611bc006cc2","modelName":"copyModelName160409792474701092","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:45:25Z","lastUpdatedDateTime":"2020-10-30T22:45:26Z"},{"modelId":"1dc06117-811a-4f2d-992a-5e0313064de7","modelName":"copyModelName160408969674208348","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:28:17Z","lastUpdatedDateTime":"2020-10-30T20:28:19Z"},{"modelId":"1f874276-43b7-46ed-9fa2-1cbe37069599","modelName":"copyModelName160409097632102762","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:49:37Z","lastUpdatedDateTime":"2020-10-30T20:49:39Z"},{"modelId":"20bc9ad7-939f-4c8f-9143-44f1b034dbdd","modelName":"copyModelName160409101383208799","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:50:14Z","lastUpdatedDateTime":"2020-10-30T20:50:15Z"},{"modelId":"22a3f5f9-827b-428c-9195-5b277a1855ad","modelName":"copyModelName160409790133601428","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:45:02Z","lastUpdatedDateTime":"2020-10-30T22:45:05Z"},{"modelId":"22c4f8d3-2fbc-4161-83dd-c4c07549829e","modelName":"copyModelName160408812211709531","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:02:02Z","lastUpdatedDateTime":"2020-10-30T20:02:05Z"},{"modelId":"28743c59-99f6-454b-974b-791c39a18c96","modelName":"copyModelName160409742836300069","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:37:08Z","lastUpdatedDateTime":"2020-10-30T22:37:11Z"},{"modelId":"29f8f2c1-3491-401c-a1ff-817823b2c29f","modelName":"modelName160434059444501956","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-11-02T18:09:54Z","lastUpdatedDateTime":"2020-11-02T18:09:57Z"},{"modelId":"2a8d180f-85aa-44f7-8682-ccd994a70640","modelName":"copyModelName160434036687802468","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-11-02T18:06:08Z","lastUpdatedDateTime":"2020-11-02T18:06:10Z"},{"modelId":"2ad29bde-d86e-44fa-b6f2-ed8ace16cf06","modelName":"copyModelName160408926540607775","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:21:05Z","lastUpdatedDateTime":"2020-10-30T20:21:07Z"},{"modelId":"31da96b2-53f5-471f-b5b8-33492a79f624","modelName":"modelName160434060643501217","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-11-02T18:10:06Z","lastUpdatedDateTime":"2020-11-02T18:10:09Z"},{"modelId":"3440db6d-3409-43e6-bbfb-fa29bfa8b04b","modelName":"copyModelName160408913054003007","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:18:51Z","lastUpdatedDateTime":"2020-10-30T20:18:53Z"},{"modelId":"3ad6a6fc-27e8-4498-8932-7a5ae648ce4b","modelName":"copyModelName160408950628707182","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:25:07Z","lastUpdatedDateTime":"2020-10-30T20:25:09Z"},{"modelId":"3b91c785-a219-4848-bdf7-4bbc3842c364","status":"ready","createdDateTime":"2020-11-02T18:11:29Z","lastUpdatedDateTime":"2020-11-02T18:11:44Z"},{"modelId":"3f79b91e-6ec1-427a-9913-39c684f53e43","modelName":"copyModelName160409759538600798","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:39:55Z","lastUpdatedDateTime":"2020-10-30T22:39:57Z"},{"modelId":"3ffa2ece-d73d-47a8-b6e4-9a0d66a5a2e2","modelName":"copyModelName160408970901001440","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T20:28:29Z","lastUpdatedDateTime":"2020-10-30T20:28:31Z"},{"modelId":"438300bf-46ef-4ee4-a666-6ec58d5876b8","modelName":"copyModelName160409805057707638","attributes":{"isComposed":false},"status":"ready","createdDateTime":"2020-10-30T22:47:31Z","lastUpdatedDateTime":"2020-10-30T22:47:33Z"}],"nextLink":"https://endpoint:443/formrecognizer/v2.1-preview.1/custom/models?nextLink=2!232!MDAwMTMwIXN1YnNjcmlwdGlvbnMvZWUyMWUzMjc5ODU4NDlmNmI4YWM1YTZhMjBhMzBkZTIvbW9kZWxzLzQ3NDAyN2JmLWZlMmItNGJjMS05Yjg2LTA5MjhjNzJiZDUyNS80NzQwMjdiZi1mZTJiLTRiYzEtOWI4Ni0wOTI4YzcyYmQ1MjUuZ3ohMDAwMDI4ITk5OTktMTItMzFUMjM6NTk6NTkuOTk5OTk5OVoh"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '293',
  'apim-request-id',
  '51770ded-8eb3-4e06-a60a-32cd6bdfc687',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 02 Nov 2020 18:12:30 GMT'
]);
