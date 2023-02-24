function middleware(req, res, next) {
    if(req.query.token === '123') {
        console.log('PasE por aquI');
        req.usuario = "Christian Alejandro Pereda Gonzalez";
        next();
    } else {
        res.status(401).send('Token no autenticado');
    }
}

module.exports = middleware;