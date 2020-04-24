const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const Product = require('../models').Product;
const User = require('../models').User;

router.get('/product', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        Product
            .findAll()
            .then((products) => res.status(200).send(products))
            .catch((error) => { res.status(400).send(error); });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});


router.post('/product', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        Product
            .create({
                prod_name: req.body.prod_name,
                prod_desc: req.body.prod_desc,
                prod_price: req.body.prod_price
            })
            .then((product) => res.status(201).send(product))
            .catch((error) => res.status(400).send(error));
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

module.exports = router;