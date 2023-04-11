const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require("./models/addTodo");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  Todo.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/:id", (req, res) => {
  Todo.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
});

const CONNECTION_URL = "mongodb://localhost:27017/todoApp";
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});
