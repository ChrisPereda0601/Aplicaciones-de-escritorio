const express = require('express');
const routes = require('./src/rutas');
const mongoose = require('mongoose');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerConf = require('./swagger.config');


const app = express();
require('dotenv').config();

const mongoUrl = process.env.MONGO_URL;

const port = process.env.PORT || 3000;

const swaggerDocs = swaggerJsDoc(swaggerConf);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('', routes);    //Middleware. //Primero uso las nuevas. Para que el comodIn de las viejas no salga primero al usar la ruta /usuarios

mongoose.connect(mongoUrl).then(() => {
    console.log('Se conecto correctamente a la base de datos');
    app.listen(port,function() {
        console.log('app is running in port ' + port)
    });
}).catch(err => {
    console.log('No se pudo conectar a la base de datos', err);
});

