const Order = require('../models/Order');

exports.createOrder = (req, res) => {
    const { product, quantity, userId } = req.body;
    const order = new Order({ product, quantity, userId });

    order.save()
        .then(() => res.status(201).json(order))
        .catch((err) => res.status(500).json({ error: err.message }));
};

exports.getAllOrders = (req, res) => {
    Order.find()
        .then((orders) => res.status(200).json(orders))
        .catch((err) => res.status(500).json({ error: err.message }));
};
