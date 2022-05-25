const express  = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/ping', (req,res) => {

    //-8.189280, -34.955397
    //-8.090598, -34.881765

    var p1 = { lat: -8.189280, lng: -34.955397 }
    var p2 = { lat: -8.090598, lng: -34.881765 }

    Math.PI
    //
    console.log(Math.PI);
    var teste = getDistance(p1,p2);
    
    res.json({result: teste});

});

const  userController = require('./controllers/userController');
const collectionPointController = require('./controllers/collectionPointController');

app.use('/collectionPoint', collectionPointController);
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