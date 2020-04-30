
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

}
module.exports = new MatchingService(Matching)