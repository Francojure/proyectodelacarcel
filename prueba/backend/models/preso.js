const express = require('express');
const router = express.Router();
const { obtenerPresos, agregarPreso, eliminarPreso } = require('../controllers/presoscontrollers');

// Ruta para obtener todos los presos
router.get('/', obtenerPresos);

// Ruta para agregar un nuevo preso
router.post('/', agregarPreso);

// Ruta para eliminar un preso
router.delete('/:id', eliminarPreso);

module.exports = router;


