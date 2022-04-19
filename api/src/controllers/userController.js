const router = require("express").Router();
const UserService = require('../services/userService')
var userService = new UserService();


router.post('/create', async (req,res) =>{

    const {email,name,password} = req.body
    const person = {
        name,email,password
    }
    if(!email){
        res.status(422).json({error:'Email obrigatório'});
        return
    }
    try {
      
        var user = await userService.create(person);
        res.status(201).json({result: user})

    } catch (error) {
        res.status(500).json({error:error});
    }
});


router.get('/getAll', async (req,res)=>{

    try {

        const users = await Person.find();
        res.status(200).json({users});
        
    } catch (error) {
        res.status(500).json({error:error});
    }

});


module.exports = router