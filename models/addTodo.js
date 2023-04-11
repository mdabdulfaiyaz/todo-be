const mongoose = require("mongoose");

const newTask = new mongoose.Schema(
  {
    task: String,
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", newTask);

module.exports = Todo;
