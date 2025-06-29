const PROTO_PATH = "./customers.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const CustomerService =
  grpc.loadPackageDefinition(packageDefinition).CustomerService;

// pass the address where we want to make a request
const client = new CustomerService(
  "127.0.0.1:30043",
  grpc.ServerCredentials.createInsecure()
);

module.exports = client;