var express = require('express');
var router = express.Router();
const Place = require('../models').Place;

// retrieve all places
router.get("/all", function(req, res) {
    Place.findAll({
        order: ['id']
        })
        .then( places => {
            res.status(200).send(JSON.stringify(places));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

// retrieve a single place by ID
router.get("/:id", function(req, res) {
    Place.findByPk(req.params.id)
        .then( place => {
            res.status(200).send(JSON.stringify(place));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

// Create a place entry
router.put("/", function(req, res) {
    console.log(req.body);
    Place.create({
        place_name: req.body.place_name
        })
        .then( place => {
            res.status(200).send(JSON.stringify(place));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

// Update record
router.patch("/:id", function(req, res) {
    console.log(req.body);
    Place.update({
        place_name: req.body.place_name
        },
        {where: {
            id: req.params.id
        }})
        .then( place => {
            res.status(200).send(JSON.stringify(place));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});


// Delete a place by id
router.delete("/:id", function(req, res) {
    Place.destroy({
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

// Delete selected places
router.post("/delete", function(req, res) {
    Place.destroy({
        where: {
            id: req.body.ids
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