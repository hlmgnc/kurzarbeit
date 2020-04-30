const BaseService = require ('./base-service')
const Expert = require ('../models/expert')

class ExpertService extends BaseService {
     
      findByExpertName(name) {
        return this.findBy('name', name)
      }

      findByLocation(location) {
        return this.findBy('location',location)

      }

}
module.exports = new ExpertService(Expert)