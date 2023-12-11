const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/JoneMongoDB")
.then(() => {
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log("failed to connect mongoDB", err);
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection1", LogInSchema)
module.exports = collection