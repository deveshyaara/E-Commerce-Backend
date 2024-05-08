const user_model = require("../models/user.model")
const jwt = require("jsonwebtoken")
const auth_Config = require("../configs/auth.config")
// it will check that body is perfect and correct
const verifySignUpBody = async (req, res, next)=>{
    try{
         //Check for the name
         if(!req.body.name){
            return res.status(400).send({
                message : "Failed ! Name was not provied in request body"
            })
        }
         //check for the email
         if(!req.body.email){
            return res.status(400).send({
                message : "Failed ! email was not provied in request body"
            })
        }

         //check for the userId
         if(!req.body.userId){
            return res.status(400).send({
                message : "Failed ! userId was not provied in request body"
            })
        }
          //Check if the user with the same userId is already present
          const user = await user_model.findOne({userId : req.body.userId})

          if(user){
              return res.status(400).send({
                  message : "Failed ! user with same userId is already present"
              })
          }
          next()

    }catch(err){
        console.log("Error while validating request body")
        return res.status(500).send({
            message : "Error while validating request body"
        })
    }
}
const verifySignInBody = async (req, res, next)=>{

    if(!req.body.userId){
        return res.status(400).send({
            message : "Failed ! userId was not provied in request body"
        })
    }
    if(!req.body.password){
        return res.status(400).send({
            message : "Failed ! Password was not provied in request body"
        })
    }
    next()
}
const verifyToken = (req, res, next)=>{
    // Check if the token is present in the header
    const token = req.headers['x-access-token']

    if (!token){
        return req.status(403).send(
            {
                message : "No token found : UnAuthorized"
            }
        )
    }
    // If it's the valid token
    jwt.verify(token,auth_Config.secret, async (err, decoded)=>{
        if(err){
            return res.status(401).send({
                message : "UnAuthorized"
            })
        }
        const user = await user_model.findOne({userId : decoded.id})
        if(!user){
            return res.status(400).send({
                message : "UnAuthorized, this user for this token does not exist"
            })

        }
        // Set the user info in the request body 
        req.user = user
        next()
    })
   
    // Then move to the next step
}
const isAdmin = (req, res, next)=>{
    const user = req.user
    if(user && user.userType == "ADMIN"){
        next()
    }else{
        return res.status(403).send({
            message : "Only Admin users are allowed to access this endpoint"
        })
    }
}

module.exports = {
    verifySignUpBody : verifySignUpBody,
    verifySignInBody : verifySignInBody,
    verifyToken : verifyToken
}