const Noticias = require('./../modelos/noticias');

class noticiasController {
    listarTarea(req, res) {
        Noticias.buscar(req.query.q)
            .then(noticias => {
                res.render('noticias', {noticias: noticias});
            })
            .catch(error => {
                res.status(400).send('No se pudieron cargar las noticias'); //Esto Angular mA adelante no lo podrA parsear, porque espera un objeto.
            })
    };
}

module.exports = new noticiasController;