const User=require("../model/User");
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const validate=require("../../../Frontend/utils/validate")
const signup=async (req,res)=>{
    try{
      validate(req.body); 
       //we need to encrypt the password
       req.body.password= await bcrypt.hash(req.body.password,10);
       const user= await User.create(req.body);
       const reply={
       Name:user.name,
       emailId:user.emailId,
       id:user._id
      }
//token creation
  const token=jwt.sign(
   {id:user._id, emailId:user.emailId},
   process.env.JWT_KEY,
   {expiresIn:60*60}
   );

    res.cookie('token',token,{maxAge:60*60*1000});

    res.status(201).json({
      user:reply,
      message:"user Signup Successfully"
    })
    }
    catch(err){
      res.status(400).json({
        message: err.message
      });
    }
}

 module.exports = {
    signup
   
 }
