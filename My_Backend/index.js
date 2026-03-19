require('dotenv').config(); //(npm i dotenv)
const express=require('express');
const app=express();
const main=require('./config/db');
require('dotenv').config(); //(npm i dotenv)
app.use(express.json());  //It convert req.body json data in java script object because through the req.body the data is come in json formate and we need in javascript formate same as in case of cookiese
const todoRoutes = require("./routes/todoRoutes");
const UserAuthRouter= require("./routes/UserAuth");
const cors = require('cors');//(npm install cors)
const cookieParser = require("cookie-parser");
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(cookieParser());
app.use("/todo", todoRoutes);
app.use("/user",UserAuthRouter);

main()
.then(async()=>{
    console.log("DB connected");
    app.listen(process.env.PORT,()=>{
        console.log("Server listening at port : "+process.env.PORT);
    });
})
.catch(err => console.log("Error Occured: "+ err));

