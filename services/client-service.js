const BaseService = require ('./base-service')
const Client = require ('../models/client')
const matchingService = require('./matching-service')
const expertService = require('./expert-service')

class ClientService extends BaseService {
    async findByName(name) {
           
        return this.findBy('name',name)
    }   

}

module.exports = new ClientService(Client)