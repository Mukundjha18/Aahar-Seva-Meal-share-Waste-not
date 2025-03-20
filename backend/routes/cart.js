const router = require('express').Router()
const User = require('../models/user')
const {authenticateToken}= require('./userAuth')
//put products to cart
router.put('/add-to-cart',authenticateToken,async(req,res)=>{
    try{
        const {productid, id} = req.headers
        const userData = await User.findById(id)
        const isCartProduct = userData.cart.includes(productid)
        if(isCartProduct){
            return res.json({
                status:"success",
                message:"Product already in cart"
            })
        }
        await User.findByIdAndUpdate(id,{
            $push:{cart:productid}
        })
        return res.json({
            status:"success",
            message:"Product added to cart"
        })
    }catch(error){
        console.log(error)
        return res.status.json({message:"An error occured"})
    }
})

//delete products from cart 
router.put('/remove-from-cart/:productid',authenticateToken,async(req,res)=>{
    try{
        const {productid} = req.params
        const {id}=req.headers
        await User.findByIdAndUpdate(id,{
            $pull:{cart:productid}
        })
        return res.json({
            status:"success",
            message:"Product removed from cart"
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"An error occured"})
    }
})

//get cart products of a single user
router.get('/get-user-cart',authenticateToken,async(req,res)=>{
    try{
        const {id} = req.headers
        const userData = await User.findById(id).populate("cart")
        const cart = userData.cart.reverse()
        return res.json({
            status:"success",
            data:cart
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"koi item nhi mila bhai"})
    }
})

module.exports = router