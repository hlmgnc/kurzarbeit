const uuid = require('uuid')

class Expert{
    constructor(id = uuid.v4(),name,location){
    this.id = id
    this.name = name
    this.location = location
    }


  static create({id,name, location}) {
    return new Expert(id,name,location)
    
   }
}

module.exports = Expert