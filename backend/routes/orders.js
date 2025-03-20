const express = require('express');
const router = express.Router(); // Ensure correct path
const {authenticateToken}= require('./userAuth')
const Product = require('../models/product')
const Order = require('../models/order')
const User = require('../models/user')

//place order
router.post('/place-order',authenticateToken,async (req,res)=>{
    try{
        const {id}=req.headers
        const {order} = req.body
        for(const orderData of order){
            const newOrder = new Order({user : id,product:orderData._id})
            const orderDataFromDb = await newOrder.save()
            await User.findByIdAndUpdate(id,{
                $push:{order:orderDataFromDb._id}
            })
            await User.findByIdAndUpdate(id,{
                $pull:{cart:orderData._id}
            })
        }
        return res.json({
            status:"success",
            message:"Order placed successfully"
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"An error occured"})
    }
})

//get order history of particular user
router.get('/get-order-history', authenticateToken, async (req, res) => {
    try {
      const { id } = req.headers;
  
      if (!id) {
        return res.status(400).json({ message: "User ID is required" });
      }
  
      console.log("User ID:", id);
  
      const userData = await User.findById(id).populate({
        path: 'order',
        populate: { path: 'product' }
      });
  
      if (!userData) {
        return res.status(404).json({ message: "User not found" });
      }
  
      console.log("User Data:", userData); // Debug log
  
      const ordersData = userData.order.length ? userData.order.reverse() : [];
  
      console.log("Orders Data:", ordersData); // Debug log
  
      return res.json({
        status: "success",
        data: ordersData
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "An error occurred" });
    }
  });
  

//get -all-orders --donor
router.get('/get-all-orders', authenticateToken, async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('product')
            .populate('user')
            .sort({ createdAt: -1 });

        if (!orders.length) {
            return res.status(404).json({ status: "error", message: "No orders found" });
        }
        return res.json({ status: "success", data: orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
})


//update order --donor
router.put('/update-status/:id',authenticateToken,async (req,res)=>{
    try{
        const {id}=req.params
        await Order.findByIdAndUpdate(id,{status: req.body.status})
        return res.json({
            status:"success",
            message:"status updated successfully"
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"An error occured"})
    }
})

module.exports = router