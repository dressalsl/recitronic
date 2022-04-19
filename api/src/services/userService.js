const Person = require('../models/user');


class UserService{


    async create (person){

        var result = await Person.create(person);
        return result;
    }

}



module.exports = UserService
