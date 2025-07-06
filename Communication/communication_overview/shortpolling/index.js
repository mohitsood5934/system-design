const express = require("express");

const app = express();

let data = "Initial Data";

app.get("/getData", (req, res) => {
  res.send({ data });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// use post / put to update
app.get("/updateData", (req, res) => {
  data = "Updated data";
  res.send({
    data,
  });
});

const PORT = process.env.PORT || 5011;

app.listen(PORT, () => {
  console.log(`Server is running on port - ${PORT}`);
});
