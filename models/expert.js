

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
matchings:[]

}) 

module.exports = mongoose.model('expert', ExpertSchema)