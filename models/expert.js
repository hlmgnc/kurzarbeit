const mongoose = require('mongoose')
const ExpertSchema = new mongoose.Schema({
name:{
    
    type:String,
    required: true
},   
location:{

    type:String,
    required: true
},
age: { type: Number, required: true, min: 18 },

}) 

module.exports = mongoose.model('Expert', ExpertSchema)