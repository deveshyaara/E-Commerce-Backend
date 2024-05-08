// POST localhost:8888/ecomm/api/v1/categories
const catController = require("../controllers/category.controller")
module.exports = (app)=>{
    app.post("/ecomm/api/v1/categories", catController.createNewCategory)
}