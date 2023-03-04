const express = require('express');
const router = express.Router();
const controller = require('./../controladores/noticias');

router.get('', controller.listarTarea);

module.exports = router;