const Person = require('../models/user');


class UserService{


    async create (person){

        var result = await Person.create(person);
        return result;
    }

    async getAll(){
        const users = await Person.find();
        return users
    }

}



module.exports = UserService
