let nock = require('nock');

module.exports.hash = "fa5b00139e5a5fa01f9b106b805df642";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/formrecognizer/v2.1-preview.2/prebuilt/invoice/analyze', {"source":"https://storageaccount/testingdata/Invoice_1.pdf?sastoken"})
  .reply(202, "", [
  'Content-Length',
  '0',
  'Operation-Location',
  'https://endpoint/formrecognizer/v2.1-preview.2/prebuilt/invoice/analyzeResults/6dde0918-95f2-40a7-bae3-662f013c44bb',
  'x-envoy-upstream-service-time',
  '799',
  'apim-request-id',
  '6dde0918-95f2-40a7-bae3-662f013c44bb',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 16 Nov 2020 22:43:13 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/invoice/analyzeResults/6dde0918-95f2-40a7-bae3-662f013c44bb')
  .reply(200, {"status":"notStarted","createdDateTime":"2020-11-16T22:43:14Z","lastUpdatedDateTime":"2020-11-16T22:43:14Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '15',
  'apim-request-id',
  '0ef98746-c509-466d-8255-443705778fc7',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 16 Nov 2020 22:43:13 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/invoice/analyzeResults/6dde0918-95f2-40a7-bae3-662f013c44bb')
  .reply(200, {"status":"notStarted","createdDateTime":"2020-11-16T22:43:14Z","lastUpdatedDateTime":"2020-11-16T22:43:14Z"}, [
  'Content-Length',
  '109',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '14',
  'apim-request-id',
  'e807b23c-20bb-4b09-8540-ed1912944900',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 16 Nov 2020 22:43:13 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/invoice/analyzeResults/6dde0918-95f2-40a7-bae3-662f013c44bb')
  .reply(200, {"status":"running","createdDateTime":"2020-11-16T22:43:14Z","lastUpdatedDateTime":"2020-11-16T22:43:14Z"}, [
  'Content-Length',
  '106',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '11',
  'apim-request-id',
  'e6de221f-185a-45b5-adbd-cac6dcf1b688',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 16 Nov 2020 22:43:18 GMT'
]);

nock('https://endpoint:443', {"encodedQueryParams":true})
  .get('/formrecognizer/v2.1-preview.2/prebuilt/invoice/analyzeResults/6dde0918-95f2-40a7-bae3-662f013c44bb')
  .reply(200, {"status":"succeeded","createdDateTime":"2020-11-16T22:43:14Z","lastUpdatedDateTime":"2020-11-16T22:43:22Z","analyzeResult":{"version":"2.1.0","readResults":[{"page":1,"angle":0,"width":8.5,"height":11,"unit":"inch"}],"pageResults":[{"page":1,"tables":[{"rows":3,"columns":6,"cells":[{"rowIndex":0,"columnIndex":0,"text":"Invoice Number","boundingBox":[0.5136,2.7829,1.8978,2.79,1.8978,3.311,0.5136,3.311]},{"rowIndex":0,"columnIndex":1,"text":"Invoice Date","boundingBox":[1.8978,2.79,3.2964,2.79,3.3036,3.311,1.8978,3.311]},{"rowIndex":0,"columnIndex":2,"text":"Invoice Due Date","boundingBox":[3.2964,2.79,4.7022,2.79,4.7094,3.311,3.3036,3.311]},{"rowIndex":0,"columnIndex":3,"columnSpan":2,"text":"Charges","boundingBox":[4.7022,2.79,6.1079,2.7829,6.1079,3.311,4.7094,3.311]},{"rowIndex":0,"columnIndex":5,"text":"VAT ID","boundingBox":[6.1079,2.7829,7.485,2.7829,7.4922,3.311,6.1079,3.311]},{"rowIndex":1,"columnIndex":0,"rowSpan":2,"text":"34278587","boundingBox":[0.5136,3.311,1.8978,3.311,1.8978,3.8534,0.5136,3.8534]},{"rowIndex":1,"columnIndex":1,"rowSpan":2,"text":"6/18/2017","boundingBox":[1.8978,3.311,3.3036,3.311,3.3036,3.8534,1.8978,3.8534]},{"rowIndex":1,"columnIndex":2,"rowSpan":2,"text":"6/24/2017","boundingBox":[3.3036,3.311,4.7094,3.311,4.7165,3.8534,3.3036,3.8534]},{"rowIndex":1,"columnIndex":3,"rowSpan":2,"columnSpan":2,"text":"$56,651.49","boundingBox":[4.7094,3.311,6.1079,3.311,6.1079,3.8534,4.7165,3.8534]},{"rowIndex":1,"columnIndex":5,"text":"PT","boundingBox":[6.1079,3.311,7.4922,3.311,7.4922,3.6393,6.1079,3.6393]},{"rowIndex":2,"columnIndex":5,"boundingBox":[6.1079,3.6393,7.4922,3.6393,7.4922,3.8534,6.1079,3.8534],"text":""}],"boundingBox":[0.4985,2.7802,7.4933,2.7816,7.4913,3.8459,0.4966,3.8447]}]}],"documentResults":[{"docType":"prebuilt:invoice","pageRange":[1,1],"fields":{"CustomerAddress":{"type":"string","valueString":"1020 Enterprise Way Sunnayvale, CA 87659","text":"1020 Enterprise Way Sunnayvale, CA 87659","boundingBox":[5.196,1.716,6.6526,1.716,6.6526,2.0359,5.196,2.0359],"page":1,"confidence":0.992},"CustomerAddressRecipient":{"type":"string","valueString":"Microsoft","text":"Microsoft","boundingBox":[5.2045,1.5114,5.8155,1.5114,5.8155,1.6151,5.2045,1.6151],"page":1,"confidence":0.989},"CustomerName":{"type":"string","valueString":"Microsoft","text":"Microsoft","boundingBox":[5.2045,1.5114,5.8155,1.5114,5.8155,1.6151,5.2045,1.6151],"page":1,"confidence":0.989},"DueDate":{"type":"date","valueDate":"2017-06-24","text":"6/24/2017","boundingBox":[3.346,3.41,3.9514,3.41,3.9514,3.5144,3.346,3.5144],"page":1,"confidence":0.989},"InvoiceDate":{"type":"date","valueDate":"2017-06-18","text":"6/18/2017","boundingBox":[1.9455,3.41,2.551,3.41,2.551,3.5144,1.9455,3.5144],"page":1,"confidence":0.936},"InvoiceId":{"type":"string","valueString":"34278587","text":"34278587","boundingBox":[0.5397,3.411,1.1457,3.411,1.1457,3.5144,0.5397,3.5144],"page":1,"confidence":0.842},"InvoiceTotal":{"type":"number","valueNumber":56651.49,"text":"$56,651.49","boundingBox":[5.3871,3.4047,6.0702,3.4047,6.0702,3.5321,5.3871,3.5321],"page":1,"confidence":0.576},"VendorAddress":{"type":"string","valueString":"1 Redmond way Suite 6000 Redmond, WA 99243","text":"1 Redmond way Suite 6000 Redmond, WA 99243","boundingBox":[0.8019,1.7033,2.1445,1.7033,2.1445,2.1911,0.8019,2.1911],"page":1,"confidence":0.953},"VendorName":{"type":"string","valueString":"Contoso","text":"Contoso","boundingBox":[0.5384,1.1583,1.4466,1.1583,1.4466,1.3534,0.5384,1.3534],"page":1,"confidence":0.979}}}]}}, [
  'Content-Length',
  '3526',
  'Content-Type',
  'application/json; charset=utf-8',
  'x-envoy-upstream-service-time',
  '18',
  'apim-request-id',
  '76c15c29-8f2b-4642-b54f-b25f47626568',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Mon, 16 Nov 2020 22:43:23 GMT'
]);
