const express = require('express');
const userController = require('./../controllers/user');

const router = express.Router();

// USER SIGNUP
router.post('/signup', userController.createUser);

// USER LOGIN
router.post('/login', userController.loginUser);

module.exports = router;
