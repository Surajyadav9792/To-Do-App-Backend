const express=require('express');
const {signup,login}=require("../controllers/userAuth");
const UserAuthRouter=express.Router();
UserAuthRouter.post("/signup",signup);
UserAuthRouter.post("/login",login);
UserAuthRouter.post("/logout",logout);

module.exports=UserAuthRouter;