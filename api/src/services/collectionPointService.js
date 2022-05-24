const CollectionPoint = require('../models/collectionPoint')


class CollectionPointsService{

    async create (collectionPoint){

        var result = await CollectionPoint.create(collectionPoint);
        return result;
    }

    async getAll(){
        const collectionPoints = await CollectionPoint.find();
        return collectionPoints
    }

    
    async getAllActive(){
        const filter = {active:true}
        const collectionPoints = await CollectionPoint.find(filter);
        return collectionPoints
    }

    async getById(id){
        const collectionPoint = await CollectionPoint.findOne({_id:id});
        return collectionPoint
    }

    async getByEmail(email){
        const collectionPoint = await CollectionPoint.findOne({email:email}).exec();
        return collectionPoint
    }

    async delete(id){
        //exclusão lógica
        const update = { active: false };
        const filter = {_id:id}
        const collectionPoint = await CollectionPoint.findOneAndUpdate(filter,update);
        return collectionPoint
    }


}


module.exports = CollectionPointsService