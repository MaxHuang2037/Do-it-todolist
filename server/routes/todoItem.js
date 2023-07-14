const express = require('express')
const router = express.Router()
const Todo = require("../models/Todo")

router.route("/api")
.get(async (req, res) => {
    const todo = await Todo.find({})
    res.json(todo)
})
.post(async (req, res) => {
    const todo = await Todo.create(req.body)
    res.json(todo)
})
.delete(async (req, res) => {
    const todo = await Todo.findByIdAndDelete(req.body)
    res.json(todo)
})
.patch(async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.body._id, req.body)
    res.json(todo)
})

module.exports = router