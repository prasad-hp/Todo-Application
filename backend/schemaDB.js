import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/Todo")

const todoSchema = mongoose.Schema({
    title: String,
    desciption: String,
    completed: Boolean
})

const Todo = mongoose.model("todo", todoSchema)

export default Todo;