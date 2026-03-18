const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema=new Schema({
     name:{
        type:String,
        required:true,
        minLength:2,
        maxLength:20
    },
    emailId:{
         type:String,
         required:true,
         unique:true,
         trim:true,
         lowercase:true,
         immutable:true,
    },
    password:{
        type:String,
        required:true
    }
    
},{timestamps: true});

const User=mongoose.model("User",UserSchema);

module.exports=User;