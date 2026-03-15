const express=require('express');
const ToDoRouter=express.Router();
const {addtask,gettask,deleteTask,gettaskById,updateTask}=require('../controllers/todoControllers')
ToDoRouter.post('/addtask',addtask);
ToDoRouter.get("/tasks",gettask);
ToDoRouter.get("/tasks/:id",gettaskById);
ToDoRouter.delete("/delete/:id",deleteTask);
ToDoRouter.put("/update/:id",updateTask);
module.exports=ToDoRouter;