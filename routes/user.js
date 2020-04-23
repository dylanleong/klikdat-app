var express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require('../models').User;

router.post('/signup', function (req, res) {
    console.log(req.body);
    if (!req.body.username || !req.body.password) {
        res.status(400).send({ msg: 'Please pass username and password.' })
    } else {
        User
            .create({
                username: req.body.username,
                password: req.body.password
            })
            .then((user) => res.status(201).send(user))
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    }
});

router.post('/signin', function (req, res) {
    User
        .findOne({
            where: {
                username: req.body.username
            }
        })
        .then((user) => {
            if (!user) {
                return res.status(401).send({
                    message: 'Authentication failed. User not found.',
                });
            }
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    var token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', { expiresIn: 86400 * 30 });
                    jwt.verify(token, 'nodeauthsecret', function (err, data) {
                        console.log(err, data);
                    })
                    res.json({ success: true, token: 'JWT ' + token });
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            })
        })
        .catch((error) => res.status(400).send(error));
});

router.get("/all", function(req, res) {
    User.findAll()
        .then( users => {
            res.status(200).send(JSON.stringify(users));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:id", function(req, res) {
    User.findByPk(req.params.id)
        .then( user => {
            res.status(200).send(JSON.stringify(user));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/", function(req, res) {
    User.create({
        username: req.body.username,
        password: req.body.password        
        })
        .then( user => {
            res.status(200).send(JSON.stringify(user));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/:id", function(req, res) {
    User.destroy({
        where: {
            username: req.params.username
        }
        })
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;
