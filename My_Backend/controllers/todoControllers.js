const ToDo= require("../model/To_do");
const addtask = async (req, res) => {
  try {
    const task = await ToDo.create(req.body);
    res.json({message:"task saved"})

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
const deleteTask = async (req, res) => {

    try {

        console.log("params:", req.params);

        const id = req.params.id;
// traverse in model and find the id and delete 
        const result = await ToDo.findByIdAndDelete(id);

        console.log("result:", result);

        if (result) {
            res.json({
                success: true,
                message: "Task deleted"
            });
        } else {
            res.json({
                success: false,
                message: "Task not found"
            });
        }

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
  addtask,
  gettask,
  deleteTask
};