const cartController = require('../controllers/cart.controller')
module.exports = (app)=>{
// Create a new cart
app.post('/ecomm/api/v1/carts', cartController.createCart)

// Retrieve a cart by user ID
app.get('/ecomm/api/v1/carts/:userId', cartController.getCartByUserId)

// Update a cart by user ID
app.put('/ecomm/api/v1/carts/:userId', cartController.updateCartByUserId)
}