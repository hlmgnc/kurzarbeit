
const BaseService = require ('./base-service')
const Matching = require ('../models/matching')
const expertService = require('./expert-service')
const clientService = require('./client-service')

class MatchingService extends BaseService {
     async findByClientId(clientId) {
      
        return this.findBy('client', clientId)
      }

      async findByExpertId(expertId) {
        return this.findBy('expert',expertId)

      }

      async match(expertId, clientId, origin, destination) {
        const client = await clientService.find(clientId)
        const expert = await expertService.find(expertId)
    
        const matching = await this.insert({ expert, client, origin, destination })
        client.matchings.push(matching)
    
        await client.save()
    
        return matching
      }

}
module.exports = new MatchingService(Matching)