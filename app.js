const express  = require('express')
const app = new express()
const errorMiddleware = require('./middlewares/errors')
app.use(express.json())
const PersonRouter = require('./routes/PersonRoutes') 
app.use(PersonRouter)
module.exports = app;
