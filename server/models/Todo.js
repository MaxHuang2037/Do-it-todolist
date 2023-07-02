const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todoItem: {
        type: String,
        trim: true
    }
})

module.exports = mongoose.model("Todo", todoSchema)