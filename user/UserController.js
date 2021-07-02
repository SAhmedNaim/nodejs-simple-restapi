const express = require('express');
const router = express.Router();
const User = require('./User');

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// GET: Fetch Users
router.get('/', function (req, res) {
    User.find({}, function (error, users) {
        if (error) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

// POST: Save User
router.post('/', function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (error, user) {
            if (error) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

module.exports = router;