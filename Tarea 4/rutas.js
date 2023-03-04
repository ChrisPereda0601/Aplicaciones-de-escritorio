const path = require('path');
const express = require('express');

function cargarHome(req, res) {
    console.log('la api trabaja');

    res.render('noticias');
}

module.exports = function(app) {
    app.use('/assets', express.static(path.join(__dirname, 'assets')));
    
    app.get('/',cargarHome);

    app.get('*', function(req, res) {
        res.status(404).send('La pagina no se encontro :(');
    });
}