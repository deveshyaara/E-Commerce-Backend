const product_model = require("../models/product.model")
// Controller for creating the product
exports.createNewProduct = async (req, res)=>{
    // Read the request body 
    // Create the product object
    const pro_data = {
        name : req.body.name,
        description : req.body.description
    }
    try{
        // Insert into mongoDb
        const product = await product_model.create(pro_data)
        return res.status(201).send(product)
    }catch(err){
        console.log("Error while creating the product", err)
        return res.status(500).send({
            message : "Error while creating a product"
        })
    }
}