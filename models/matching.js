
const mongoose = require('mongoose')
const MatchingSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'client',
        autopopulate: {maxDepth :1}
    },
    expert: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'expert',
        autopopulate:  {maxDepth :1}
    },
    origin: String,
    destination: String
}) 

MatchingSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Matching', MatchingSchema)