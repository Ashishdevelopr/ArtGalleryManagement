const express = require("express")
const server = express()
const cors = require("cors")
const bodyParser = require ("body-parser")
const mongoose  = require("mongoose")
require('dotenv').config();

server.use(cors())
server.use(bodyParser.json())

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Database Connected")
})
.catch((error)=>{
    console.log(error)
})

server.post('/', (req,res)=>{
    console.log(req.body)
    const data = req.body
    res.send(data)
})

server.get("/",(req,res)=>{
    res.send("hello")
})


server.listen(5050, ()=>{
    console.log("server started")
})