const express = require("express");

const app = express();

let data = "Initial Data";

const waitingClients = [];

app.get("/getData", (req, res) => {
    if (data !== req.query.lastData) {
        res.json({ data });
    } else {
        waitingClients.push(res);
    }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// use post / put to update
app.get("/updateData", (req, res) => {
  data = req.query.data;
  while(waitingClients.length > 0) {
    const client = waitingClients.pop();
    client.json(data);
  }

  res.send({ success: 'data updated successfully' });
});

const PORT = process.env.PORT || 5011;

app.listen(PORT, () => {
  console.log(`Server is running on port - ${PORT}`);
});
