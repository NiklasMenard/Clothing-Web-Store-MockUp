const express = require('express')
const app = express()
require('express-async-errors')

const cors = require('cors')

const cartRouter = require('./controllers/cart_products')
const productsRouter = require('./controllers/products')

app.use(cors());
app.use(express.json())
app.use(express.static("build"));
app.use('/api/products', productsRouter)
app.use('/api/cart_products', cartRouter)


module.exports = app