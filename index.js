const express = require('express')
const { clientDatabase } = require('./database')
const flatted = require('flatted')

const app = express()
app.set('view engine', 'pug')

app.get('/clients', async (req, res) => {
    const clients = await clientDatabase.load()  
    res.send(flatted.stringify(clients))

}) 

app.get('/', (req, res) => {
   res.render('index')
 
})    

app.listen(8080,() => {
    console.log('started listening on 8080')
})