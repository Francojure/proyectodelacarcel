// backend/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const Policia = require('./models/policia');
const router = express.Router();

router.post('/inicioSesion', async (req, res) => {
  const { nombre, password } = req.body;
  try {
    const policia = await Policia.findOne({ nombre });
    if (!policia) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, policia.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    req.session.policiaId = policia._id;
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
