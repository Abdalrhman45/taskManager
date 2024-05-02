const mongoose = require('mongoose')


const taskSchema= new mongoose.Mongoose.schema({

    name:{
        type:string,
        require:[true,'must provide name'],
        trim:true,
        maxlength:[20,'name can be bigger than 20 chart']
    },
    completed:{
        type:Boolean,
        default:false,
    }
})
module.exports = mongoose.model('Task',taskSchema)
