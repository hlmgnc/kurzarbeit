const fs = require('fs')
const flatted = require('flatted')


class BaseService {
    constructor(model){
        this.model = model
    }
    save(objects){
        return this.model.insertMany(objects)
    }
    load() {
        return this.model.find()    
    }
    async insert(object){
        
        return await this.model.create(object)
    }
    async removeBy(property,value){
        
        return this.model.deleteOne({[property]: value})
    }
    async update (id, object){
        
        return this.model.findByIdAndUpdate( id,object )   
    }
    async find(id) {
        
        return this.model.findById(id).populate('matchings')
    }
    async findBy(property, value) {

        return this.model({[property]: value})
    }
}

module.exports = BaseService