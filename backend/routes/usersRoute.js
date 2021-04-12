const express = require('express');
const route = express.Router();
const {createUser}= require('../controllers/usersControll')

route.post('/register', createUser)

module.exports = route;
