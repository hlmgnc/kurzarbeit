const BaseService = require ('./base-service')
const Client = require ('../models/client')


class ClientService extends BaseService {
    async findByName(name) {
           
        return this.findBy('name',name)
    }   

}

module.exports = new ClientService(Client)