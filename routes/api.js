
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../config/passport')(passport);
const Product = require('../models').Product;
const User = require('../models').User;
const getToken = require('../lib/getToken')

// get product if authenticated
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


// update product if authenticated
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

module.exports = router;