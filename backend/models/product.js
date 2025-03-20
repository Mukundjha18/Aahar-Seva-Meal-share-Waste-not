const mongoose = require('mongoose');

const product = new mongoose.Schema({
    pname:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    Url:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    company:{
        type:String,
        required:true,
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled']
      },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},
    { timestamps: true }
)
module.exports = mongoose.model("products",product)