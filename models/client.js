//const Matching = require('./matching')
//const uuid = require('uuid')

const mongoose = require('mongoose')
const ClientSchema = new mongoose.Schema({
name:{
    
    type:String,
    required: true
},   
location:{

    type:String,
    required: true
},
matchings:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'


}]

}) 

module.exports = mongoose.model('client', ClientSchema)

//class Client{
//    constructor(id = uuid.v4(), name, location, matchings = []) {
//        this.id = id
//        this.name = name
//        this.location = location
//        this.matchings = matchings
    
//    } 

//    match(expert,origin,destination) {
//       const matching = new Matching (expert, this, origin, destination)

//        this.matchings.push(matching)
//        return matching
//    }
    
    
//    static create({id, name, location, matchings}) {
      
//        return new Client(id, name, location, matchings)
    
    
//   }
//}


//module.exports = Client 