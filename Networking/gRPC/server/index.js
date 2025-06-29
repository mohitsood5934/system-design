const PROTO_PATH = "./customers.proto";

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
});

const customersProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server(); // not express server , pure instance of gRPC server

const customers = [
  {
    id: "cxcewewewe",
    name: "Mohit Sood",
    age: 28,
    address: "Bangalore",
  },
  {
    id: "dsdsdcxcx",
    name: "Namit Thakur",
    age: 17,
    address: "Manali",
  },
  {
    id: "fdfcr3reds",
    name: "Rohit Sood",
    age: 28,
    address: "Kullu",
  },
];

server.addService(customersProto.CustomerService.service, {
  getAll: (call, callback) => {
    callback(null, { customers });
  },
  get: (call, callback) => {
    let customer = customers.find(
      (customer) => customer.id === call.request.id
    );
    if (customer) {
      callback(null, customer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
  insert: (call, callback) => {
    let customer = call.request;
    customer.id = Math.random();
    customers.push(customer);
    callback(null, customer);
  },

  update: (call, callback) => {
    let existingCutomer = customers.find((n) => n.id === call.request.id);
    if (existingCutomer) {
      existingCutomer.name = call.request.name;
      existingCutomer.age = call.request.age;
      existingCutomer.address = call.request.address;
      callback(null, existingCutomer);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
  remove: (call, callback) => {
    let existingCutomer = customers.findIndex(
      (customer) => customer.id === call.request.id
    );

    if (existingCutomer !== 1) {
      customers.splice(existingCutomer, 1);
      callback(null, {});
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Not found",
      });
    }
  },
});

server.bind("127.0.0.1:30043", grpc.ServerCredentials.createInsecure());
server.start();
