const { clientDatabase,expertDatabase } = require('../database')
const flatted = require('flatted')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const experts = await expertDatabase.load()  
    //res.send(flatted.stringify(experts))
    res.render('experts',{experts})
}) 

router.get('/:expertId', async (req, res)=> {
    const expert = await expertDatabase.find(req.params.expertId)
    if(!expert) return res.status(404).send('cannot find expert')
    res.render('expert',{ expert })

})

module.exports = router
