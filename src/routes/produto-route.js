const express = require('express')
const route = express.Router()
const controller = require('../controllers/produto-controller')
const { router } = require('../app')

route.get('/', controller.get)
route.post('/', controller.post)

module.exports = route