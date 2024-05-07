const mongoose = require("mongoose")
// We are tracking username,pass,email,and user type
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        minLenght : 10,
        unique : true
    },
    userType : {
        type : String,
        required : true,
        default : "CUSTOMER",
        enum : ["CUSTOMER","ADMIN"]
    }
},{timestamps : true, versionKey : false})
module.exports = mongoose.model("User", userSchema)