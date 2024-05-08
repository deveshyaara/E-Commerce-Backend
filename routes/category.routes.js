// POST localhost:8888/ecomm/api/v1/categories
const catController = require("../controllers/category.controller")
const auth_mw = require("../middlewares/auth_mw")
module.exports = (app)=>{
    app.post("/ecomm/api/v1/categories",[auth_mw.verifyToken], catController.createNewCategory)
}