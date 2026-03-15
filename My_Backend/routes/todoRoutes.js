const express=require('express');
const ToDoRouter=express.Router();
const {addtask,gettask,deleteTask}=require('../controllers/todoControllers')
ToDoRouter.post('/addtask',addtask);
ToDoRouter.get("/tasks",gettask);
ToDoRouter.delete("/delete/:id",deleteTask);
module.exports=ToDoRouter;