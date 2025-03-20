const router = require('express').Router()
const User = require('../models/user')
const {authenticateToken}= require('./userAuth')

//add product to favourite
router.put('/add-product-to-favourite', authenticateToken, async (req, res) => {
    try {
      const { productid, id } = req.headers;
      const userData = await User.findById(id);
      const isFavouriteProduct = userData.favourite.includes(productid);
  
      if (isFavouriteProduct) {
        return res.status(400).json({ message: "Product already in favourite" });
      }
  
      await User.findByIdAndUpdate(id, {
        $push: { favourite: productid }
      });
  
      return res.status(200).json({ message: "Product added to favourite" }); // Changed to 200
    } catch (error) {
      console.error("Error adding product to favourite:", error);
      res.status(500).json({ message: "add nhi hui bhai" });
    }
  });
  

//delete product to favourite
router.put('/remove-product-to-favourite',authenticateToken,async(req,res)=>{
    try{
        const {productid, id} = req.headers
        const userData = await User.findById(id)
        const isFavouriteProduct = userData.favourite.includes(productid)
        if(isFavouriteProduct){
        await User.findByIdAndUpdate(id,{
            $pull:{favourite:productid}
        })}
        return res.status(400).json({message:"Product removed from favourite"})
    }catch{
        res.status(500).json({message:"Internal server error"})
    }
})

//get favourite products of a single user
router.get('/get-favourite-products',authenticateToken,async(req,res)=>{
    try{
        const {id} = req.headers
        const userData = await User.findById(id).populate('favourite')
        const favouriteProducts = userData.favourite
        return res.json({
            status:"success",
            data:favouriteProducts
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"an error occur"})
    }})


module.exports = router