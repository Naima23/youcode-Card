const express = require('express');
const route = express.Router();
const {createAdmin,loginAdmin}= require('../controllers/adminControll')

route.post('/register', createAdmin) //register admin
route.get('/login', loginAdmin); // login admin 

module.exports = route;