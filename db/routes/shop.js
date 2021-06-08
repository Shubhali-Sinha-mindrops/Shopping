const express = require('express');
const router = express.Router();
const shop = require('../controllers/shop');

router.post('/create-order',shop.postOrder);

module.exports = router;
