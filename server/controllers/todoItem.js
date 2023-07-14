const Todo = require("../models/Todo")

const getTodoItem = async (req, res) => {
    const todo = await Todo.find({})
    res.json(todo)
}
const createTodoItem = async (req, res) => {
    const todo = await Todo.create(req.body)
    res.json(todo)
}
const deleteTodoItem = async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.body)
    res.json(todo)
}
const updateTodoItem = async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.body._id, req.body)
    res.json(todo)
}

module.exports = {getTodoItem, createTodoItem, deleteTodoItem, updateTodoItem}