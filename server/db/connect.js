const mongoose = require("mongoose")

const connectDB = (url) => {
    console.log("connected")
    return mongoose.connect(url)
}

module.exports = connectDB