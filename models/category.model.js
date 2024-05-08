// Adding category name and description
const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
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
module.exports = mongoose.model("Category", categorySchema)