const { matchingService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const matchings = await matchingService.load()  
    res.render('matchings',{matchings})
}) 

router.get('/search', async (req, res)=> {
    const expertId =req.query.expertId
    const matching = await matchingService.findByExpertId(expertId)
    
    res.render('matchings',{ matching })

})




module.exports = router
