var express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
const User = require('../models').User;
const getToken = require('../lib/getToken')

// verify JWT
router.post('/verify', function (req, res) {    
    var token = req.body.token
    jwt.verify(token, process.env.JWT_SECRET, function (err, data) {
        // console.log(err, data)
        if (data) {
            return res.status(200).send({ valid: true, msg: 'JWT Valid.' })
        } else {
            return res.status(200).send({ valid: false, msg: 'JWT Invalid.' });
        }
    })        
})

// register user
router.post('/signup', function (req, res) {
    console.log(req.body);
    if (!req.body.username || !req.body.password) {
        res.status(400).send({ msg: 'Please pass username and password.' })
    } else {
        User
            .create({
                username: req.body.username,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name
            })
            .then((user) => {
                res.status(201).send(user)
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error);
            });
    }
});

// log user in
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
                    var token = jwt.sign(JSON.parse(JSON.stringify(user)), process.env.JWT_SECRET, { expiresIn: 86400 * 30 });                    
                    jwt.verify(token, process.env.JWT_SECRET, function (err, data) {
                        // console.log(err, data);
                    })
                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        id: user.id,
                        first_name: user.first_name,
                        username: user.username
                    });
                    user.update({
                        last_login_at: new Date()
                    })
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            })
        })
        .catch((error) => res.status(400).send(error));
});


// log user out
router.post('/signout', function (req, res) {
    req.session.destroy()
    return (
        res.status(200).send()
    )
})

// list all users
router.get("/all", function (req, res) {
    User.findAll()
        .then(users => {
            res.status(200).send(JSON.stringify(users));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

// get user
router.get("/:id", passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        User.findByPk(req.params.id)
            .then(user => {
                res.status(200).send(JSON.stringify(user));
            })
            .catch(err => {
                res.status(500).send(JSON.stringify(err));
            });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }

});

// create user
router.put("/", function (req, res) {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
        .then(user => {
            res.status(200).send(JSON.stringify(user));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.patch("/:id", function(req, res) {
    console.log(req.body);
    User.update({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        },
        {where: {
            id: req.params.id
        }})
        .then( user => {
            res.status(200).send(JSON.stringify(user));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

// delete user
router.delete("/:id", function (req, res) {
    User.destroy({
        where: {
            username: req.params.username
        }
    })
        .then(() => {
            res.status(200).send();
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;
