'use strict'

const express = require('express')
const ProductController = require('../controllers/product')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', ProductController.getProducts)
api.get('/product/:productId', ProductController.getProduct)
api.post('/product', ProductController.saveProduct)
api.put('/product/:productId', ProductController.updateProduct)
api.delete('/product/:productId', ProductController.deleteProduct)
api.get('/private', function(req, res){
	res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api