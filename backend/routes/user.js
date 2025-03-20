const router = require('express').Router()
const User = require('../models/user')  
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {authenticateToken}= require('./userAuth')

const connectDB = require('../conn/conn');
connectDB();
//signup
router.post('/sign-up', async(req,res)=>{
    try{
        const {full_name,email,username,password} = req.body
        // check length of username
        if(username.length==8){
            return res
            .status(400)
            .json({message:"username must be at least 8 characters"})
        }

        // check username already exits
        const existingUsername = await User.findOne({username : username})
        if(existingUsername){
            return res
            .status(400)
            .json({message:"username already exists"})
        }

        // check email already exits
        const existingEmail = await User.findOne({email : email})
        if(existingEmail){
            return res
            .status(400)
            .json({message:"email already exists"})
        }

        // check password length
        if(password.length==8){
            return res
            .status(400)
            .json({message:"password must be at least 8 characters"})
        }
        const hashPass = bcrypt.hashSync(password, 10)
        // create new user
        const newUser = new User({
            full_name: full_name,
            email: email,
            username: username,
            password: hashPass 
         })
         await newUser.save()
         res.status(200).json({message :"Congrats ! you became a member of our family"})
    }catch(error){
        res.status(500).json({message:"nhi hua bro"})
    }
})
//Signin
router.post('/sign-in', async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid username" });
        }
        const match = await bcrypt.compare(password, existingUser.password);
        if (match) {
            const authClaims = {
                name: existingUser.username,
                role: existingUser.role,
            };
            const token = jwt.sign(authClaims, "Details123", { expiresIn: "30d" });
            res.status(200).json({
                id: existingUser._id,
                role: existingUser.role,
                token: token,
            });
        } else {
            res.status(400).json({ message: "Invalid password" });
        }
    } catch (error) {
        res.status(500).json({ message: "aap ki jankari prapt nhi hui" });
    }
});

//get the user information
router.get('/get-user-information', authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }
        const data = await User.findById(id).select('-password');
        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "kuch nhi h bhai" });
    }
});


//update address
router.put("/update-address",authenticateToken,async(req,res)=>{
    try{
        const {id} = req.headers
        const {address} = req.body
        const data = await User.findByIdAndUpdate(id,{address:address},{new:true})
        return res.status(200).json({message : "updated"})
    }catch{
        res.status(500).json({message:"Internal server error"})
    }
})
module.exports = router