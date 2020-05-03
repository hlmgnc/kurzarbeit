  
const BaseDatabase = require('./base-service')
const Client = require('../models/client')
const matchingDatabase = require('./matching-service')
const expertDatabase = require('./expert-service')

class ClientDatabase extends BaseDatabase {
  async findByName(name) {
    return this.findBy('name', name)
  }

  async match(expertId, clientId, origin, destination) {
    const client = await this.find(clientId)
    const expert = await expertDatabase.find(expertId)

    const matching = await matchingDatabase.insert({ expert, client, origin, destination })
    client.matchings.push(matching)

    await client.save()
    return matching
  }
}

module.exports = new ClientDatabase(Client)