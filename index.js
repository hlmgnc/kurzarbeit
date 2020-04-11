const express = require('express')
const { clientDatabase } = require('./database')
const flatted = require('flatted')

const app = express()
app.set('view engine', 'pug')

app.get('/clients', async (req, res) => {
    const clients = await clientDatabase.load()  
    //res.send(flatted.stringify(clients))
    res.render('clients',{clients})
}) 

app.get('/clients/:clientId', async(req,res)=> {
    const client = await clientDatabase.find(req.params.clientId)
    if(!client) return res.status(404).send('cannot find client')
    res.render('client',{ client })

})
app.get('/', (req, res) => {
   res.render('index')
 
})    

app.listen(8080,() => {
    console.log('started listening on 8080')
})