const mongoose = require('mongoose');

const user = new mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true,
        default:"https://cdn-icons-png.flaticon.com/512/149/149071.png"
    },
    role:{
        type:String,
       default:"receiver",
       enum:["donater","receiver"]
    },
    favourite:[{
        type:mongoose.Types.ObjectId,
        ref:"products",
    }],
    cart:[{
        type:mongoose.Types.ObjectId,
        ref:"products"
    }],
    order:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    }],
},
    { timestamps: true }
)

module.exports = mongoose.model("user",user)