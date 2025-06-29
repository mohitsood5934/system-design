 
# <center>gRPC</center>
# Remote Procedure Call (RPC) 

## To do
- gRPC
- RPC
- ProtoBuf
- HandsOn
- REST v/s gRPC
- Advantages / Disadvantages of gRPC 


##  gRPC ?

- developed by google, open source, used to have effective communication b/ w 2 systems

- helps in load balancing , tracing , health checking , authentication

- gRPC works on something called Remote Procedure Call

- client can directly execute a function written on the server (can execute from 3rd party machine too)


## Understand by example

- Client function   ----->  client stub(modification & definition of data)   ---> RPC Runtime (client) ----> RPC Runtime(server)   ---> server stub    ---> server function

- in gRPC communication happen through Protocol Buffer

- HTTP2 (compress faster)

- Protocol serialization / deserialization

- Single long live connection

- Bidirectional streaming


## Protocal Buffer (ProtoBuf) - IDL (Interface Definition Language)

- ProtoBuf (Google)
- IDL
- Serialization / Deserialization
- Binary  support 
- .proto (proto3)


.proto file (human readable) => Automated generation of code => Python / Java / Go (Languages) => Encode / Decode => Serialized data (can be interpreted by any language)

## Benefit of protobuf

- less CPU resources
- mobile 
- faster (binary data , transmitted in speed of light)

## Understanding Architecture

Browser  ---> client gRPC    ---> server gRPC

- Browser will make an REST API call to gRPC client (Express server) (2 way communication)

- gRPC client will make a call to gRPC server using protoBuf (2 way communication)


## References

- https://grpc.io/docs/what-is-grpc/introduction/