const express=require('express');
const ToDoRouter=express.Router();
const {addtask,gettask,deleteTask,gettaskById}=require('../controllers/todoControllers')
ToDoRouter.post('/addtask',addtask);
ToDoRouter.get("/tasks",gettask);
ToDoRouter.get("/tasks/:id",gettaskById);
ToDoRouter.delete("/delete/:id",deleteTask);
module.exports=ToDoRouter;