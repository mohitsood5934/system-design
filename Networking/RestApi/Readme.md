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

 - OPTIONS: The OPTIONS HTTP method requests permitted communication options for a given URL or server. This can be used to test the allowed HTTP methods for a request, or to determine whether a request would succeed when making a CORS preflighted request. A client can specify a URL with this method, or an asterisk (*) to refer to the entire server.

 - CONNECT : used to establish communication b/w the different services or resources so next time it will be faster

 - TRACE: when we want to trace request / response messages then we can use this HTTP Method. used only in development mode not in production because it can leak the information of our server


## TODO App

- Any data we send or receive is in the form of serialized data (serialized stringify data)
- we have to parse this data in the server . So we have to use bodyparser in the express server.
