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

// GET: Fetch Single User by ID
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
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

// PUT: Update Single User by ID
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});

// DELETE: Delete Single User by ID
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send(`User: ${user.name} has been deleted successfully.`);
    });
});

module.exports = router;
