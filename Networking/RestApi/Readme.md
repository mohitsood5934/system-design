npm init -> create npm package

## REST APIs

## URL

- https://www.techysood.com/blogs/what-is-js?tag=js&imp=1#top
  where
- scheme: https
- subdomain: www
- domain: techysood
- subdirectory: blogs
- path: blogs/what-is-js
- query string : tag=js&imp=1
- TLD(Top Level Domain) : .com
- fragment - top (store extra information in the URL) This hash is not received by the server

## API Methods

- PUT : When you want to update then you have to give whole data object

- PATCH: when you are giving value of only what is rrquired to update like updating name only

- HEAD: The HTTP HEAD method is a powerful HTTP method that can be used to optimize web performance, improve security, and enhance user experience. The HEAD method is identical to GET except that the server MUST NOT return a message-body in the response. The meta information contained in the HTTP headers in response to a HEAD request SHOULD be identical to the information sent in response to a GET request.

- OPTIONS: The OPTIONS HTTP method requests permitted communication options for a given URL or server. This can be used to test the allowed HTTP methods for a request, or to determine whether a request would succeed when making a CORS preflighted request. A client can specify a URL with this method, or an asterisk (\*) to refer to the entire server.

- CONNECT : used to establish communication b/w the different services or resources so next time it will be faster

- TRACE: when we want to trace request / response messages then we can use this HTTP Method. used only in development mode not in production because it can leak the information of our server

## TODO App

- Any data we send or receive is in the form of serialized data (serialized stringify data)
- we have to parse this data in the server . So we have to use bodyparser in the express server.

## HEADERS

1. Request Headers

<table>
<tr>
<th>
Header
</th>

<th>
Use case
</th>

<th>
Example
</th>

</tr>

<tr>
<td>Host</td>
<td>Target host</td>
<td>www.1.cdn.example.com</td>
</tr>

<tr>
<td>Origin</td>
<td>Origin Host</td>
<td>www.example.com</td>
</tr>

<tr>
<td>Referrer</td>
<td>Address/ Indicate of previous webpage from which request was made/td>
<td>https://example.com/prevPage</td>
</tr>

<tr>
<td>User Agent</td>
<td>Identify the client/User Agent String - OS ,Browser</td>
<td>Mozila </td>
</tr>

<tr>
<td>Accept</td>
<td>Response content type</td>
<td>Mozila </td>
</tr>

<tr>
<td>Accept Language</td>
<td>Preferred response content language</td>
<td>en-US </td>
</tr>

<tr>
<td>Accept Encoding</td>
<td>Encoding algorithm</td>
<td>gzip, deflate, br</td>
</tr>

<tr>
<td>Connection</td>
<td>Keep connection open</td>
<td>keep-alive, closed</td>
</tr>

<tr>
<td>Authorization</td>
<td>Client side credentials</td>
<td>Authorization - Bearer - </td>
</tr>

<tr>
<td>Cookie</td>
<td>Previous Server token can be resend </td>
<td>key=value </td>
</tr>

<tr>
<td>if-modified-since</td>
<td></td>
<td></td>
</tr>

<tr>
<td>cache-control</td>
<td></td>
<td></td>
</tr>

</table>

2. Response Headers

<table>
<tr>
<th>
Header
</th>

<th>
Use case
</th>

<th>
Example
</th>

</tr>

<tr>
<td>Date</td>
<td>When the response was generated</td>
<td>Wed, 21 May 2025 04:37:07 GMT</td>
</tr>

<tr>
<td>Server</td>
<td>Provides server info</td>
<td>Server: Apache/2.4.41 - do not send server info .it has security risks</td>

</tr>

<tr>
<td>Content type</td>
<td>type of response content</td>
<td>application/json, text/html</td>

</tr>

<tr>
<td>Content Length</td>
<td>original body response length</td>
<td>256</td>

</tr>

<tr>
<td>Set-cookie</td>
<td>informs about cookie need to store for future reference</td>
<td>Set-cookie: user_id=123</td>

</tr>

<tr>
<td>Content-encoding</td>
<td>Response content encoding</td>
<td>br</td>
</tr>

<tr>
<td>cache-control</td>
<td></td>
<td></td>
</tr>

<tr>
<td>last-modified</td>
<td></td>
<td></td>
</tr>

<tr>
<td>Etag</td>
<td></td>
<td></td>
</tr>

</table>

## Status Codes

<table>
<tr>
<th>Status Range</th>
<th>Use Case</th>
<th>Status Code </th>
<th>Use Case</th>
</tr>

<tr>
<td>1xx</td>
<td>Information</td>
<td>
100 <br/>
101

</td>
<td>
Continue <br/>
Switching (polling to websocket connection / http to websocket)
</td>
</tr>

<tr>
<td>2xx</td>
<td>Success</td>
<td>
200<br/>
201<br/>
202<br/>
204<br/>
206<br/>

</td>
<td>
ok <br/>
created (when we want to insert data in DB / POST request) <br/>
accepted (when we raise request but get response later e.g bank statement) <br/>
no content <br/>
partial information (download files and that info comes in chunk) <br/>

</td>
</tr>

<tr>
<td>3xx</td>
<td>Redirection</td>
<td>
301 <br/>
302 <br/>
307 <br/>
308 <br/>
</td>
<td>
Moved Permanently <br />
Temporary Moving <br />
302 - retain method<br/>
301 - retain method <br/>

</td>
</tr>

<tr>
<td>4xx</td>
<td>Client Side Error</td>
<td>
400 <br/>
401 <br/>
403 <br/>
404 <br/>
405 <br/>
429 <br />

</td>
<td>
Bad Request <br/>
Unauthorized <br />
Authorization <br />
Not Available <br />
Method not allowed <br/>
Concurrent Request

</td>
</tr>

<tr>
<td>5xx</td>
<td>Server Side Error</td>
<td>
500 <br/>
502 <br />
503 <br />
504 <br />
507 <br />
</td>
<td>
Internal Server Error <br />
Bad Gateway <br />
Server is down <br />
Gateway timeout <br />
Insufficient storage <br />

</td>
</tr>

</table>

## GraphQL
