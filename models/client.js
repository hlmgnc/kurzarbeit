const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
name:{
    
    type:String,
    required: true,
    minlength: 2
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

ClientSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('Client', ClientSchema)


 