const { expertService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    res.send(await expertService.load())  
    
}) 


router.post('/', async (req, res) => {
    
    const expert= await expertService.insert(req.body)
    res.send(expert)
})

router.delete('/:expertId', async (req, res) =>{
    await expertService.removeBy('_id', req.params.expertId)
    res.send('ok')
})


router.get('/:expertId', async (req, res)=> {
    const expert = await expertService.find(req.params.expertId)
    if(!expert) return res.status(404).send('cannot find expert')
    res.render('expert',{ expert })

})



router.patch('/:expertId', async (req,res) => {

const { expertId } = req.params
const { name } = req.body

await expertService.update(expertId, { name })

})

module.exports = router
