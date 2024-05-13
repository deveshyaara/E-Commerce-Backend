// product.model.js

// Importing mongoose library
const mongoose = require("mongoose");

// Defining the schema for the product model
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    quantity: {
        type: Number,
        default: 0
    },
    imageURL: {
        type: String,
        required: true
    }
}, { timestamps: true, versionKey: false })

// Creating and exporting the Product model
module.exports = mongoose.model("Product", productSchema)
