//Este es mi proxy de routas
const router = require('express').Router();
const rutasNoticias = require('./noticias');

router.use('/noticias', rutasNoticias);

module.exports = router;