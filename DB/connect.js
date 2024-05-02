const mongoose = require('mongoose');

const connectDB = (url)=>{
    return mongoose
    .connect(connectionString,{
        userNewUrlParser:true,
        userCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB


//mongodb+srv://abdalrhmansaber45:<password>@cluster0.qkmhjsl.mongodb.net/