const users = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    if (users.exists(req.body.email) == true) return res.status(400).send({ message: 'Email already exists' });
    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        if (err) return res.status(500).send({ message: 'error in hashing the password' });
        req.body.password = hashedPassword;
        await users.create(req.body)
            .then(result => res.status(200).send(result))
            .catch(err => res.status(500).send({ message: 'error in adding new user' }));
    })
}

const login = async (req, res) => {
    if (users.exists(req.body.email) == false) return res.status(400).send({ message: 'user dosent exist' });
    const { email, password } = req.body;
    await users.findOne({ email })
        .then(user =>
            bcrypt.compare(password, user.password, (err, isMatching) => {
                if (err) return res.status(500).send({ message: 'error accessing password' });
                if (!isMatching) return res.status(500).send({ message: 'password do not match' });

                jwt.sign({ ...user }, process.env.SECRET_KEY, { expiresIn: '60m' }, (err, token) => {
                    if (err) return res.status(500).send({ message: 'error with the token' });
                    res.status(200).send({ login_success: true, token: token });
                })
            })
        )
        .catch(err => res.status(500).send({ message : 'general error' }));
}

module.exports = {register, login};