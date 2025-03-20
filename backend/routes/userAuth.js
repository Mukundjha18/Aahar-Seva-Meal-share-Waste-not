const jwt = require('jsonwebtoken')

const authenticateToken = (req,res,next)=>{
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1] 

    if(token==null){
        return res.sendStatus(401).json({message:"Authenticate token reuired"})
    }
    jwt.verify(token,"Details123",(err,user)=>{
        if(err){
            return res.status(403).json({message :"Token expire, please signin again"})
        }
        req.user = user
        next()
    })
}

module.exports = {authenticateToken}