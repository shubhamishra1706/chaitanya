const express = require('express');
const route = express.Router()
const {getdata} = require('../controller/users')

route.get('/users',getdata)

module.exports = {route}