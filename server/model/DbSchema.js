const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    artist:{
        type:String,
        required:true
    },
    // desc:{
    //     type:String,
    //     required:true
    // },
    // category:{
    //     type:String,
    //     required:true
    // },
    // year:{
    //     type:Number,
    //     required:true
    // },
    // image:{
    //     type:file,
    //     required:true
    // },
})

const art = new mongoose.model('art', userSchema)

module.exports = art