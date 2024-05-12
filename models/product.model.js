// Adding product name and description
const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
        unique : true
    },
    description : {
        type : String,
        required : true,
    }
},{timestamps : true, versionKey : false})
module.exports = mongoose.model("Product", productSchema)