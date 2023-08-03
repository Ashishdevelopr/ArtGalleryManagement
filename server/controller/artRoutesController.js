const art = require("../model/DbSchema")

// Add User Art 
const addUserArt = async(req,res) =>{
    const data = req.body
    const artItem = new art(data)

    await artItem.save()
    .then((result) => {
        console.log('Data inserted:', result);
        res.status(201).json({
            success:true,
            message:"art added successfully"
        })
      })
      .catch((error) => {
        console.error('Error inserting data:', error.message);
      });
}

// GET User Art by Id
const getUserArtById = async(req,res)=>{
    const getArt = req.params._id
    console.log(getArt)

    const getUserArt = await art.findById(getArt)
    res.json({
        success:true,
        message:getUserArt
    })

}

// get user art all 
const getAllUserArt = async(req,res)=>{
    const getAllArt = await art.find()
    if(!getAllArt){
        return res.json({
            success:false,
            message:"Arts not found"
        })

    }
    res.send(getAllArt)
}

//  delete user art by Id
const deleteUserArtById = async(req,res)=>{
    const getId = req.params._id
    const deleteUserArt = await art.findByIdAndDelete(getId)
    res.json({
        success:true,
        message:deleteUserArt
    })
}

// update user art by Id
const updateUserArtById = async(req,res)=>{
    const getId = req.params._id
    const {name, artist} = req.body
    
    const updatedUserArt = await art.findByIdAndUpdate(
        getId,
        {name, artist},
        {new:true}
    )

    if (!updatedUserArt) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({
        success:true,
        message:"art updated successfully",
        updatedUserArt
      })
}

module.exports={addUserArt, getUserArtById, getAllUserArt, deleteUserArtById, updateUserArtById}