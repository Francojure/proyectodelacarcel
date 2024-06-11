const express = require('express');
const router = express.Router();
const { obtenerPolicias, agregarPolicia, actualizarPolicia, eliminarPolicia } = require('../controllers/presosController');

router.get('/', obtenerPolicias);
router.post('/', agregarPolicia);
router.put('/:id', actualizarPolicia);
router.delete('/:id', eliminarPolicia);

module.exports = router;

