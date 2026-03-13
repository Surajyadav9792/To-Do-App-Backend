const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send("jai Shree Ram");
})
app.listen(3200);