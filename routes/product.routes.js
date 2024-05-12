// POST localhost:8888/ecomm/api/v1/products
const proController = require("../controllers/product.controller")
const auth_mw = require("../middlewares/auth_mw")
module.exports = (app)=>{
    app.post("/ecomm/api/v1/products",[auth_mw.verifyToken], proController.createNewCategory)
}