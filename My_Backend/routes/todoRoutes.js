const express=require('express');
const ToDoRouter=express.Router();
const {addtask,gettask}=require('../../../Frontend/controllers/todoControllers')
ToDoRouter.post('/addtask',addtask);
ToDoRouter.get("/",gettask);
module.exports=ToDoRouter;