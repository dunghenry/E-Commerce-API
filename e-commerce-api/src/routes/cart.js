const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middleware/verifyToken');
router.get('/cart', verifyTokenAndAdmin, cartController.getAllCarts);
router.post('/cart', verifyToken, cartController.createCart);
router.put('/cart/:id', verifyTokenAndAuthorization, cartController.updateCart);
router.delete('/cart/:id', verifyTokenAndAuthorization, cartController.deleteCart);
router.get('/cart/find/:userId', verifyTokenAndAuthorization, cartController.getCart);
module.exports = router;