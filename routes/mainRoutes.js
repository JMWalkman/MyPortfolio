const express = require('express');
const router = express.Router;

const mainController = require('../controllers/mainController');

router.get('/', mainController.index); // Cuando reciba / ir a la direccion de la funcion index en mainController
router.get('/about', mainController.about);

module.exports = router; // siempre se exporta la funcion router