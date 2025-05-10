import express from "express";

const app = express();

app.all("/", (req, res) => {
  console.log(req, "request");
  console.log(res, "response");

  res.send(`I'm up!`);
});

const todos = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: false,
  },
  {
    id: "3",
    title: "Task 3",
    completed: false,
  },
];

// READ
app.get("/todos", (req, res) => {
    res.json(todos);
});

// CREATE

app.post("/todos", (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({ success: true, todos });

})

// UPDATE

// DELETE

const PORT = 5111;

app.listen(PORT, () => {
  console.log(`Server is running at the port - ${PORT}`);
});
