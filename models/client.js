const Matching = require('./matching')
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
        ref:'Matching',
        autopopulate: {maxDepth :2}
}]

})

ClientSchema.methods.match = async function(expert,origin,destination){
const matching = await Matching.create ({expert, client: this, origin, destination})
this.matchings.push(matching)

await this.save()

return matching
}

ClientSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('client', ClientSchema)


 