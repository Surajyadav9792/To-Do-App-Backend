const express=require('express');
const ToDoRouter=express.Router();
const {addtask,gettask,deleteTask,gettaskById,updateTask}=require('../controllers/todoControllers');
const Middleware=require("../Middleware/TodoMiddleware")
ToDoRouter.post('/addtask',Middleware,addtask);
ToDoRouter.get("/tasks",Middleware,gettask);
ToDoRouter.get("/tasks/:id",Middleware,gettaskById);
ToDoRouter.delete("/delete/:id",Middleware,deleteTask);
ToDoRouter.put("/update/:id",Middleware,updateTask);
module.exports=ToDoRouter;