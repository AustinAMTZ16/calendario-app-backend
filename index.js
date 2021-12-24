const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');



//crear el servidor de express
const app = express();




//Base de datos
dbConnection();




// configuracion cors
app.use(cors());




//Directorio publico
app.use(express.static('public'));




//Lectura y parseo del body
app.use( express.json() );




//rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
// TODO: CRUD: Eventos




//Eschar peticion
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo ${process.env.PORT}`)
})