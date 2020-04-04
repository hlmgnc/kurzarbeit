class Expert{
    constructor(name,location){
    this.name = name
    this.location = location
    }


  static create({name, location}) {
    return new Expert(name,location)
    
   }
}

module.exports = Expert