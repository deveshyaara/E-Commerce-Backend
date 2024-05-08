//  POST localhost:8888/ecomm/api/v1/auth/signup
//  Intercepting this

const authController = require("../controllers/auth.controller")
const authMW = require("../middlewares/auth_mw")
module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/signup", [authMW.verifySignUpBody], authController.signup)
    // Route for post localhost:8888/ecomm/api/v1/auth/signin
    app.post("/ecomm/api/v1/auth/signin", authController.signin)
}