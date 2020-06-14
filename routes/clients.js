const { clientService, matchingService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    res.send(await clientService.load())
    
}) 

router.post('/', async (req, res, next) => {
    try{
        const client = await clientService.insert(req.body)
        res.send(client)
    }   catch(e) {
        next(e)
    }
})

router.delete('/:clientId', async (req, res) => {
    await clientService.removeBy('_id', req.params.clientId)
    res.send('ok')
})


router.get('/:clientId', async (req, res)=> {
    const client = await clientService.find(req.params.clientId)

    if(!client) return res.status(404)
    res.send(client)
})

router.post('/:clientId/matchings', async (req,res) => {
    const { clientId } = req.params
    const { expertId, origin, destination } = req.body

    const matching = await matchingService.match(expertId, clientId, origin , destination)
    res.send(matching)
})

router.patch('/:clientId', async (req,res) => {

const { clientId } = req.params
const { name } = req.body

await clientService.update(clientId, { name })

})

module.exports = router