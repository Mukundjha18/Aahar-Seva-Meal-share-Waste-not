const router = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const Product = require('../models/product')
const {authenticateToken}= require('./userAuth')

//add products -- donor
router.post('/add-product', authenticateToken, async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await User.findById(id);
        
        if (user.role !== "donater") {
            return res.status(403).json({ message: "You are not authorized to add product" });
        }

        const product = new Product({
            pname: req.body.pname,
            price: req.body.price,
            quantity: req.body.quantity,
            Url: req.body.Url,
            desc: req.body.desc,
            rating: req.body.rating,
            company: req.body.company
        });

        await product.save();
        res.status(201).json({ message: "Product added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "kuch dikkat h bhai" });
    }
});

//update product 
router.put('/update-product',authenticateToken,async(req,res)=>{
    try{
        const {productid} = req.headers
        await Product.findByIdAndUpdate(productid,{
            name:req.body.pname,
            price:req.body.price,
            quantity:req.body.quantity,
            image:req.body.image,
            description:req.body.description,
            rating:req.body.rating,
            company: req.body.company
        })
        return res.status(200).json({
            message:"Product updated successfully"
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"An error occurred"})
    }
})

//delete product
router.delete('/delete-product',authenticateToken,async (req,res)=>{
    try{
        const {productid} = req.headers
        await Product.findByIdAndDelete(productid)
        return res.status(200).json({message:"product is deleted "})
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Product is not matched"})
    }
})

//gets all product
router.get('/get-all-products', async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: 1 });
        return res.json({
            status: "success",
            data: products,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
    }
});

//get recently added products
router.get('/get-recent-products',async(req,res)=>{
    try{
        const products = await Product.find().sort({createdAt:-1}).limit(4)
        return res.json({
            status:"success",
            data:products,
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"koi add nhi hui h"})
    }
})

//get product by id
router.get('/get-product-by-id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json({
            status: "success",
            data: product,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "An error occurred" });
    }
});


module.exports = router