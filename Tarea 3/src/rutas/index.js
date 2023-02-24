const router = require('express').Router();
const rutasGaleria = require('./galeria');
const rutasExp = require('./exp');
const { auth } = require('./../middlewares');

router.use('/galeria', auth, rutasGaleria); //Esta es la URL de el navegador.
router.use('/exp', auth, rutasExp);

module.exports = router;