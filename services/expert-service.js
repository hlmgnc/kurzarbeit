const BaseService = require ('./base-service')
const Expert = require ('../models/expert')

class ExpertService extends BaseService {
     
      async findByExpertName(name) {
        return this.findBy('name', name)
      }

      async findByLocation(location) {
        return this.findBy('location',location)

      }

}
module.exports = new ExpertService(Expert)