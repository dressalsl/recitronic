const express  = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/ping', (req,res) => {
    res.json({result: 'Pong'});
});

const  userController = require('./controllers/userController');
const collectionPointsController = require('./controllers/collectionPointsController');

app.use('collectionPoints', collectionPointsController);
app.use('/user', userController);

console.log("Api Online !");


//criar arquivo para db
mongoose.connect('mongodb+srv://dbTeste:ojNboea6FAlCwKaq@cluster0.3fehm.mongodb.net/recitronicTestDatabase?retryWrites=true&w=majority')
.then(() => 
{
    console.log("Conectado ao db");
    app.listen(3000);

})
.catch( () => {
    console.log("Erro conectar ao db");
});

//