const Cart = require('../models/cart.model')

// Controller function to create a cart
exports.createCart = async (req, res) => {
    try {
        const { userId, items } = req.body
        
        // Create the new cart
        const cart = new Cart({ userId, items })
        await cart.save()
        
        res.status(201).send(cart)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// Controller function to retrieve a cart by user ID
exports.getCartByUserId = async (req, res) => {
    try {
        const userId = req.params.userId
        const cart = await Cart.findOne({ userId })
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" })
        }
        res.status(200).send(cart)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

// Controller function to update a cart by user ID
exports.updateCartByUserId = async (req, res) => {
    try {
        const userId = req.params.userId
        const { items } = req.body
        
        const updatedCart = await Cart.findOneAndUpdate({ userId }, { items }, { new: true })
        if (!updatedCart) {
            return res.status(404).send({ message: "Cart not found" });
        }
        
        res.status(200).send(updatedCart)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}