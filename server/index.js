const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// database
const connectDB = require("./db/connect")

const userRouter = require("./routes/todoItem")
app.use("/", bodyParser.json(), userRouter)

const start = async() => {
    try{
        await connectDB("mongodb+srv://vmkcreeper:gsbzss777@nodetaskmanager.7y7vy.mongodb.net/?retryWrites=true&w=majority")
        app.listen(5000, console.log("Server running on port 5000"))
    } catch (error){
        console.log(error)
    }
}

start()