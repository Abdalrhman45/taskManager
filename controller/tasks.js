
const task = require('../models/task');
const task = require('../models/task');
const task = require('../models/task')
const task =require('../models/task')
const getAllTasks= (req,res)=>{
    try{
        const tasks= await task.find ({});
        res.status(200).json({tasks});
    }catch(error){
        res.status(500).json({msg:error});
    }

    res.send('get all tasks');
}

const  createTask = (req,res)=>{
    try{
        const task = await task.create(req.body)
    res.status(201).json({task});
    }catch(error){
        res.status(500).json({msg:error});
    }
const  getTask = (req,res)=>{
    try{
        const{id:taskID}=req.params;
        const task = await task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`no task with id:${taskID}`});
        }
        res.status(200).json({task});

    }catch(error){

        res.status(500).json({msg:error});
    }
    res.json({id:req.params.id});
}   

const  deleteTask = (req,res)=>{
    try{
        const {id:taskID}=req.params;
        const task = await task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`No task with id:${taskID}`})
        }res.status(200).json({task:null , status:'success'})
    }catch(error){
        res.status(500).json({msg:error});
    }
    res.send('delete a task');


    const  updateTask = (req,res)=>{
        try{
            const {id:taskID}=req.params;
            const task = await task.findOneAndUpdate({_id:taskID},req.body);
            if(!task){
                return res.status(404).json({msg:`No task with id:${taskID}`})
            }
            res.status(200).json({task});
        }catch(error){
            res.status(500).json({msg:error});
        }    
        res.send('update a task');
    }   
}   
module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,

};