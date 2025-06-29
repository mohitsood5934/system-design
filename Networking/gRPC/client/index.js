const express = require("express");
const bodyParser = require("body-parser");
const client = require("./client");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// TODO: to expose REST call
// which internally call gRPC server function using gRPC client

app.get("/", (req, res) => {
  client.getAll(null, (err, data) => {
    if (!err) {
      return res.status(200).json({ customers: data.customers, success: true });
    }
    res
      .status(400)
      .json({
        success: false,
        msg: "Error occurred while fetching customers ",
      });
  });
});

app.post("/create", (req, res) => {

    let newCustomer = {
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    };

    client.insert(newCustomer, (err, data) => {
        if (err) {
            throw err
        }
        console.log("Customer created successfully", data)
        return res.status(201).json({
            success: true,
            msg: "Customer created successfully"
        })

    })
});

app.post("/update", (req, res) => {
    let updateCustomer = {
        id: req.body.is,
        name: req.body.name,
        age: req.body.age,
        address: req.body.address
    };

    client.update(updateCustomer, (err, data) => {
        if (err) {
            throw err
        }
        console.log("Customer updated successfully", data)
        return res.status(201).json({
            success: true,
            msg: "Customer updated successfully"
        })

    })
});

app.post("/remove", (req, res) => {
    client.remove({ id: req.body.customer_id }, (err, data) => {
        if (err) {
            throw err
        }
        console.log("Customer removed successfully", data)
        return res.status(201).json({
            success: true,
            msg: "Customer removed successfully"
        })

    })

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening to port - ${PORT}`);
});
