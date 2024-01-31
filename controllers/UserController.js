const User = require('../models/User');

exports.createUser = (req, res) => {
    const { username, email } = req.body;
    const user = new User({ username, email });

    user.save()
        .then(() => res.status(201).json(user))
        .catch((err) => res.status(500).json({ error: err.message }));
};

exports.getAllUsers = (req, res) => {
    User.find()
        .then((users) => res.status(200).json(users))
        .catch((err) => res.status(500).json({ error: err.message }));
};
