const { Schema , mongoose } = require("mongoose") ;

const userSchema = new Schema({
    username: {
        type:String,  
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    image:{
        type:String
    },
    role:{
        type:String,
        enum:[ "user" , "host" , "admin" ] ,
        default: "user"
    },
    bio:{
        type:String,
        maxlength:50
    }
}) ;

const User = mongoose.model("User" , userSchema) ;
module.exports = User ;