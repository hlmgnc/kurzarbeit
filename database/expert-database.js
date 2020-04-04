const BaseDatabase = require ('./base-database')
const Expert = require ('../models/expert')

class ExpertDatabase extends BaseDatabase {
     
      findByExpertName(name) {
        return this.findBy('name', name)
      }

      findByLocation(location) {
        return this.findBy('location',location)

      }

}
module.exports = new ExpertDatabase(Expert)