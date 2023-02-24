const path = require('path');
const express = require('express');
const auth = require('./src/middlewares').auth;

function cargarHome(req, res) {
    console.log('api works for ' + req.usuario);
    //res.sendFile(path.join(__dirname, 'views', 'index.html'));
    res.render('home');
}

module.exports = function(app) {
    app.use('/assets', express.static(path.join(__dirname, 'assets')));

    app.get('/', auth, cargarHome); //Siempre ejecuta home con /

    app.get('*', function(req, res) {
        res.render('404');
        // res.status(404).send('Pagina no encontrada');
    });
}