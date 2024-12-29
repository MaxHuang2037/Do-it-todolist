const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

// database
const connectDB = require("./db/connect")

const userRouter = require("./routes/todoItem")
app.use("/", bodyParser.json(), userRouter)

const URI = process.env.MONGO_URI

const start = async() => {
    try{
        await connectDB(URI)
        app.listen(5000, console.log("Server running on port 5000"))
    } catch (error){
        console.log(error)
    }
}

start()