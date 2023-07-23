const express = require("express")
const server = express()
const cors = require("cors")
const bodyParser = require ("body-parser")
const mongoose  = require("mongoose")
require('dotenv').config();
const art = require("./DbSchema")

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
    const data = req.body
    const artItem = new art(data)
    artItem.save()
    .then((result) => {
        console.log('Data inserted:', result);
      })
      .catch((error) => {
        console.error('Error inserting data:', error.message);
      });
})



server.listen(5050, ()=>{
    console.log("server started")
})