var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
const ShoeSize = require('../models').ShoeSize;


router.get("/all", function(req, res) {
    ShoeSize.findAll()
        .then( shoesizes => {
            res.status(200).send(JSON.stringify(shoesizes));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:id", function(req, res) {
    ShoeSize.findByPk(req.params.id)
        .then( shoesize => {
            res.status(200).send(JSON.stringify(shoesize));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/", function(req, res) {
    ShoeSize.create({
        shoe_category: req.body.shoe_category,
        shoesize_uk: req.body.shoesize_uk,
        shoesize_jp: req.body.shoesize_jp,
        shoesize_us: req.body.shoesize_us,
        shoesize_au: req.body.shoesize_au,
        shoesize_eu: req.body.shoesize_eu,
        shoesize_cm: req.body.shoesize_cm,
        shoesize_in: req.body.shoesize_in,
        id: req.body.id
        })
        .then( shoesize => {
            res.status(200).send(JSON.stringify(shoesize));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.patch("/:id", function(req, res) {    
    ShoeSize.update({
        shoe_category: req.body.shoe_category,
        shoesize_uk: req.body.shoesize_uk,
        shoesize_jp: req.body.shoesize_jp,
        shoesize_us: req.body.shoesize_us,
        shoesize_au: req.body.shoesize_au,
        shoesize_eu: req.body.shoesize_eu,
        shoesize_cm: req.body.shoesize_cm,
        shoesize_in: req.body.shoesize_in,
        },
        {where: {
            id: req.params.id
        }})
        .then( shoesize => {
            res.status(200).send(JSON.stringify(shoesize));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/:id", function(req, res) {
    ShoeSize.destroy({
        where: {
            id: req.params.id
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
