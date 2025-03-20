const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => { 
    try {
        await mongoose.connect(`${process.env.URL}`, {
        });
        console.log('MongoDB connected...');
    } catch (err) {
       console.log("error founded")
    }
};

module.exports = connectDB;
