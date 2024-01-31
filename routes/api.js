const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const OrderController = require('../controllers/OrderController');

router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);

router.post('/orders', OrderController.createOrder);
router.get('/orders', OrderController.getAllOrders);

module.exports = router;
