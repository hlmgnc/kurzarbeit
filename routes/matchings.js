const { matchingService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const matchings = await matchingService.load()  
    res.render('matchings',{ matchings })
}) 

router.get('/search', async (req, res)=> {
   
    const origin = req.query.origin
    const destination = req.query.destination
  
    const query = {}
  
    if (origin) query.origin = origin
    if (destination) query.destination = destination
  

    const matchings = await matchingService.query(query)
    
    res.render('matchings',{ matchings })

})




module.exports = router
