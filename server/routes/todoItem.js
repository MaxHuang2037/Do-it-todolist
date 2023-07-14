const express = require('express')
const router = express.Router()
const {getTodoItem, createTodoItem, updateTodoItem, deleteTodoItem} = require("../controllers/todoItem")

router.route("/api")
.get(getTodoItem)
.put(createTodoItem)
.delete(deleteTodoItem)
.patch(updateTodoItem)


module.exports = router