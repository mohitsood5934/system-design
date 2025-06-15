import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

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
  res.status(200).json(todos);
});

// CREATE

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json({ success: true, todos });
});

// UPDATE

app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const id = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id,
      ...newTodoData,
    };
    return res.status(201).json({ message: "Todo updated successfully", todos });
  }

  return res.status(400).json({ message: `No todo found with id : ${id}`, todos });
});


// DELETE

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;

  const index = todos.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return res.json({ message: "Todo deleted successfully", todos });
  }
  return res.status(400).json({ message: `No todo found with id : ${id}`, todos });
});

const PORT = 5111;

app.listen(PORT, () => {
  console.log(`Server is running at the port - ${PORT}`);
});
