const category_model = require("../models/category.model")
// Controller for creating the category
exports.createNewCategory = async (req, res)=>{
    // Read the request body 
    // Create the category object
    const cat_data = {
        name : req.body.name,
        description : req.body.description
    }
    try{
        // Insert into mongoDb
        const category = await category_model.create(cat_data)
        return res.status(201).send(category)
    }catch(err){
        console.log("Error while creating the category", err)
        return res.status(500).send({
            message : "Error while creating a category"
        })
    }
   
    // return the response of the created category
}
exports.findCategoryByName = async (req, res) => {
    const name = req.params.name;
    try {
        const category = await category_model.findOne({ name })
        if (!category) {
            return res.status(404).json({ message: "Category not found" })
        }
        return res.status(200).send(category)
    } catch (err) {
        console.error("Error while finding category:", err);
        return res.status(500).send({ message: "Internal server error" })
    }
}
// Controller function to retrieve all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await category_model.find()
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// Controller function to retrieve a category by ID
exports.getCategoryById = async (req, res) => {
    const categoryId = req.params.categoryId
    try {
        const category = await category_model.findById(categoryId)
        if (!category) {
            return res.status(404).send({ message: "Category not found" })
        }
        res.status(200).send(category)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// Controller function to update a category by ID
exports.updateCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const { name, description } = req.body;
        
        const updatedCategory = await category_model.findByIdAndUpdate(categoryId, { name, description }, { new: true });
        if (!updatedCategory) {
            return res.status(404).send({ message: "Category not found" });
        }
        
        res.status(200).send(updatedCategory);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}
// Controller function to delete a category by ID
exports.deleteCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const deletedCategory = await category_model.findByIdAndDelete(categoryId);
        if (!deletedCategory) {
            return res.status(404).send({ message: "Category not found" });
        }
        res.status(200).send({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}