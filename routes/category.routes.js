// POST localhost:8888/ecomm/api/v1/categories
const catController = require("../controllers/category.controller")
const auth_mw = require("../middlewares/auth_mw")
module.exports = (app)=>{
    // Route for creating a new category
    app.post("/ecomm/api/v1/categories",[auth_mw.verifyToken], catController.createNewCategory)
    // Route for finding a category based on its name
    app.get("/ecomm/api/v1/categories/:name", catController.findCategoryByName)
    // Retrieve all categories
    app.get("/ecomm/api/v1/categories", catController.getAllCategories)
    // Retrieve a category by ID
    app.get("/ecomm/api/v1/categories/:categoryId", catController.getCategoryById)

    // Update a category by ID
    app.put("/ecomm/api/v1/categories/:categoryId", catController.updateCategoryById)

    // Delete a category by ID
    app.delete("/ecomm/api/v1/categories/:categoryId", catController.deleteCategoryById)
}