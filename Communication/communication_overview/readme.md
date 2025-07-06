### Communication 

- Short Polling : consistently polling the back end server about is my data ready ? 
- Long Polling: once our data will be fully prepared then it will be sent to you.
- Web socket: real time communication , 
- Server side event
- webhook



### Short Polling

It is a technique where a client repeatedly sends a request to a server at regular intervals to check for updates. The server responds immediately to each request , even if there is no new data. The contrasts with the long polling where server holds the request untill new data is available.

- short live connection
- no persistent connection
- less resource utilisation
- problem with scale


Example

- real time system
- notification
- cricinfo
- analytics
- version update


### Long Polling

Long polling is a technique used in web development to achieve near real-time communication between a client and a server. It works by having the client send an HTTP request to the server, and instead of immediately responding, the server holds the request open until new data becomes available or a timeout occurs. Once new data is available, the server responds, and the client immediately sends another request, creating a continuous cycle. This approach minimizes latency compared to traditional polling where the client constantly polls for updates. 

- single long lived connection
- connection is open untill you get new data / timeout
- reduce the number of calls (less round trips)
- real time collaboration

cons:

- large number of connections increases the load on the server
   large connection -> more load

