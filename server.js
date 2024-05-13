// This is a starting file 
const express = require("express")
const mongoose = require("mongoose")
const server_configs =require("./configs/server.config")
const db_config = require("./configs/db.config")
const user_model = require("./models/user.model")
const bcrypt = require("bcryptjs")
const app = express()
app.use(express.json())

// Create an Admin User at the starting of the application if not present
// Connect with mongoDb
mongoose.connect(db_config.DB_URL)
const db = mongoose.connection
db.on("error", ()=>{
    console.log("Error while connecting to mongoDb")
})
db.once("open", ()=>{
    console.log("Connected succefully to mongoDb")
    init()
})
async function init(){
    try{
        let user = await user_model.findOne({userId : "admin"})
        if(user){
            console.log("Admin is already present")
            return
        }

    }catch(err){
        console.log("Error while reading the data", err)
    }
    
   
    try{
        user = await user_model.create({
            name : "Devesh",
            userId : "admin",
            email : "tiwaridewesh887@gmail.com",
            userType : "ADMIN",
            password : bcrypt.hashSync("Welcome1",8)
        })
    console.log("Admin created", user)
    }catch(err){
        console.log("Error while creating admin", err)
    }
}
// Stich the route to the server
require("./routes/auth.routes")(app)
require("./routes/category.routes")(app)
require("./routes/product.routes")(app)
require("./routes/cart.routes")(app)
// Start the server 
app.listen(server_configs.PORT, ()=>{
    console.log("Server Started at port num :", server_configs.PORT)
})
