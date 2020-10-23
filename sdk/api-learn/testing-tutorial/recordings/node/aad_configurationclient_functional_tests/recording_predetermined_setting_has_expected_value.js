let nock = require('nock');

module.exports.hash = "3b25719d04bd27fb8d48850c9a24da61";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fmyappconfig.azconfig.io%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '4b8b44a3-0fc1-41ef-9192-a54f0c134800',
  'x-ms-ests-server',
  '2.1.11169.11 - NCUS ProdSlices',
  'Set-Cookie',
  'fpc=AvVnkrvcDMJFqGi4CJT221yqBNuqAQAAANoJJdcOAAAA; expires=Sun, 22-Nov-2020 17:28:59 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Fri, 23 Oct 2020 17:28:58 GMT',
  'Content-Length',
  '1491'
]);

nock('https://myappconfig.azconfig.io:443', {"encodedQueryParams":true})
  .get('/kv/test-key')
  .query(true)
  .reply(200, {"etag":"cbARBFLodwGLL3qktvCwmLa1vet","key":"test-key","label":null,"content_type":"","value":"EHXGJuokzjWEMUA2","tags":{},"locked":false,"last_modified":"2020-10-16T00:08:12+00:00"}, [
  'Server',
  'openresty/1.17.8.2',
  'Date',
  'Fri, 23 Oct 2020 17:28:59 GMT',
  'Content-Type',
  'application/vnd.microsoft.appconfig.kv+json; charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'keep-alive',
  'Last-Modified',
  'Fri, 16 Oct 2020 00:08:12 GMT',
  'ETag',
  '"cbARBFLodwGLL3qktvCwmLa1vet"',
  'Sync-Token',
  'zAJw6V16=MDozIzUxMTU0MDc=;sn=5115407',
  'x-ms-request-id',
  'e8e4e203-8c72-4990-8fb5-49cba410578a',
  'x-ms-correlation-request-id',
  'e8e4e203-8c72-4990-8fb5-49cba410578a',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Expose-Headers',
  'DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Authorization, x-ms-client-request-id, x-ms-useragent, x-ms-content-sha256, x-ms-date, host, Accept, Accept-Datetime, Date, If-Match, If-None-Match, Sync-Token, x-ms-return-client-request-id, ETag, Last-Modified, Link, Memento-Datetime, retry-after-ms, x-ms-request-id, WWW-Authenticate',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains'
]);
