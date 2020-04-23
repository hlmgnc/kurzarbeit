const { clientDatabase,expertDatabase } = require('../database')
const flatted = require('flatted')


const router = require('express').Router()

router.post('/', async (req, res) => {
    
    console.log(req.body)
    const client = Client.create(req.body)
    await clientDatabase.insert(client)
    res.send(client)
})

router.delete('/:clientId', async (req, res) =>{
    await clientDatabase.removeBy('_id', req.params.clientId)
    res.send('ok')
})

router.get('/', async (req, res) => {
    const clients = await clientDatabase.load()  
    //res.send(flatted.stringify(clients))
    res.render('clients',{clients})
}) 

router.get('/:clientId', async (req, res)=> {
    const client = await clientDatabase.find(req.params.clientId)
    if(!client) return res.status(404).send('cannot find client')
    res.render('client',{ client })

})

router.post('/:clientId/matchings', async(req,res) => {
    const { clientId } = req.params
    const { expertId, origin, destination } = req.body

    const client = await clientDatabase.find(req.params.clientId)
    const expert = await expertDatabase.find(expertId)
    
    client.match(client, origin , destination)

    
    await clientDatabase.update(client)
    res.send(flatted.stringify(client))
})

router.patch('/:clientId', async (req,res) => {

const { clientId } = req.param
const { name } = req.body

await clientDatabase.update(clientId, { name })

})

module.exports = router