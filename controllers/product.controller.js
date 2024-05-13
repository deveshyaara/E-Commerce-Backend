const Product = require("../models/product.model")

// Controller for creating a new product
exports.createNewProduct = async (req, res) => {
    
        // Read the request body 
        // Create the product object
        const productData ={
            name : req.body.name,
            description : req.body.description,
            price : req.body.price,
            category : req.body.category,
            quantity : req.body.quantity,
            imageURL : req.body.imageURL  
        }
    try{
        // Insert into MongoDB
        const product = await Product.create(productData)

        // Send the created product in the response
        return res.status(201).json(product);
    } catch (err) {
        console.error("Error while creating the product:", err)
        return res.status(500).send({ 
            message: "Error while creating a product"
        })
    }
}
