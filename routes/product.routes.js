// product.routes.js

// Importing necessary modules
const productController = require("../controllers/product.controller")
const auth_mw = require("../middlewares/auth_mw")

// Exporting the routes
module.exports = (app) => {
    // Route for creating a new product
    app.post("/ecomm/api/v1/products", [auth_mw.verifyToken], productController.createNewProduct)
}
