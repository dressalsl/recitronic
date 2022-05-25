const CollectionPoint = require('../models/collectionPoint')

function rad(x){
    return x * Math.PI / 180;
}
function getDistance(p1, p2) {
    //Haversine 
    var R = 6378137; 
    var dLat = rad(p2.lat - p1.lat);
    var dLong = rad(p2.lng - p1.lng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; //distance in meter
  };


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

    async getMoreClosePoint(id){



    }


}


module.exports = CollectionPointsService