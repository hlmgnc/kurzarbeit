const express = require('express')
const bodyParser = require('body-parser')
const clientsRouter = require('./routes/clients')
const indexRouter = require('./routes/index')
const expertsRouter = require('./routes/experts')
const matchingsRouter = require('./routes/matchings')
require('./mongo-connection')

const app = express()
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/clients', clientsRouter)
app.use('/', indexRouter)
app.use('/experts', expertsRouter)
app.use('/matchings', matchingsRouter)
app.listen(8080,() => {
    console.log('started listening on 8080')
})