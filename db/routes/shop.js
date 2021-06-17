const express = require('express');
const router = express.Router();

const shopController = require('../controllers').shop;
const ordersController = require('../controllers/orders');

//shop.js
router.get('/userList', shopController.list);
router.get('/user/:id', shopController.getById);
router.post('/user/add', shopController.add);
router.get('/userCart', shopController.getUserCart);
router.post('/addProducts', shopController.addProducts);
router.post('/addCarts', shopController.addCart);
router.get('/Carts', shopController.getCartProduct);
router.post('/placeOrder', shopController.placeOrder);
router.post('/addProduct/:cartId/:productId', shopController.addCartProduct);
router.delete('/deleteProduct/:id', shopController.deleteCartProduct);

//orders.js
router.post('/placeOrders/:productID', ordersController.orderProducts);

module.exports = router;
