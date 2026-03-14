const mongoose=require('mongoose');
const {Schema}=mongoose;
const TodoSchema=new Schema({
    title:{
     type:String,
     required:true,
     minLength:3,
     maxLength:200,
    },
    description:{
        type:String,
        required:true
    }
},{timestamps: true});

const ToDo=mongoose.model("Todo",TodoSchema);

module.exports=ToDo;
