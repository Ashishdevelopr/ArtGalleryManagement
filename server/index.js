const express = require("express")
const server = express()
const cors = require("cors")
const bodyParser = require ("body-parser")
const mongoose  = require("mongoose")
const router = require("./routes/artRoutes")
require('dotenv').config();

server.use(cors())
server.use(bodyParser.json())
server.use(router)

mongoose.connect(process.env.MONGODB_TEST)
.then(()=>{
    console.log("Database Connected")
})
.catch((error)=>{
    console.log(error)
})

// server.post('/add-art', async(req,res)=>{
//     const data = req.body
//     const artItem = new art(data)

//     await artItem.save()
//     .then((result) => {
//         console.log('Data inserted:', result);
//         res.status(201).json({
//             success:true,
//             message:"art added successfully"
//         })
//       })
//       .catch((error) => {
//         console.error('Error inserting data:', error.message);
//       });
// })

// server.get("/get-art/:_id", async(req,res)=>{
//     const getArt = req.params._id
//     console.log(getArt)

//     const getUserArt = await art.findById(getArt)
//     res.json({
//         success:true,
//         message:getUserArt
//     })

// })

// server.get("/get-all", async(req,res)=>{
//     const getAllArt = await art.find()
//     if(!getAllArt){
//         return res.json({
//             success:false,
//             message:"Arts not found"
//         })

//     }
//     res.status(200).json({
//         success:true,
//         message:getAllArt
//     })
// })

// server.delete("/delete-art/:_id", async(req,res)=>{
//     const getId = req.params._id
//     console.log(getId)
//     const deleteUserArt = await art.findByIdAndDelete(getId)
//     res.json({
//         success:true,
//         message:deleteUserArt
//     })
// })

// server.put("/update-art/:_id", async(req,res)=>{
//     const getId = req.params._id
//     const {name, artist} = req.body
    
//     const updatedUserArt = await art.findByIdAndUpdate(
//         getId,
//         {name, artist},
//         {new:true}
//     )

//     if (!updatedUserArt) {
//         return res.status(404).json({ message: 'User not found' });
//       }

//       res.json({
//         success:true,
//         message:"art updated successfully",
//         updatedUserArt
//       })
// })


server.listen(5050, ()=>{
    console.log(`server started at http://localhost/5050`)
})