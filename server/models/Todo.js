const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todoItem: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Todo", todoSchema)