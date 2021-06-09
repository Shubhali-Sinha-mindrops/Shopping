const express = require('express');
const router = express.Router();

const shopController = require('../controllers').shop;

router.get('/api/user', shopController.list);
router.get('/api/user/:id', shopController.getById);
router.post('/api/user/add', shopController.add);

module.exports = router;
