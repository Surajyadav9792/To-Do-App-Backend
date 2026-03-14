const ToDo= require("../model/To_do");
const addtask = async (req, res) => {
  try {
    const task = await ToDo.create(req.body);
    res.send("task saved");

  } catch (err) {
    res.status(400).send(err);
  }
};
const gettask=async(req,res)=>{
   try{
    const tasks = await ToDo.find();
    res.json(tasks);
   }
   catch(err){
    res.status(401).send(err);
   }

}

module.exports = {
  addtask,
  gettask
};