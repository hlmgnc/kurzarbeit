
const mongoose = require('mongoose')
const MatchingSchema = new mongoose.Schema({
    expert: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Expert',
        autopopulate:  {maxDepth :1}
    },
    
    
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        autopopulate: {maxDepth :1}
    },
    
    origin: String,
    destination: String
}) 

MatchingSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Matching', MatchingSchema)