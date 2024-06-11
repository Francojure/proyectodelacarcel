const Preso = require('../models/preso');

// Obtener todos los presos
const obtenerPresos = async (req, res) => {
  try {
    const presos = await Preso.find();
    res.json(presos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Agregar un nuevo preso
const agregarPreso = async (req, res) => {
  const preso = new Preso({
    nombre: req.body.nombre,
    edad: req.body.edad,
    unidad: req.body.unidad,
    horario: req.body.horario,
    oficial: req.body.oficial,
    destino: req.body.destino
  });

  try {
    const newPreso = await preso.save();
    res.status(201).json(newPreso);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un preso
const eliminarPreso = async (req, res) => {
  try {
    await Preso.findByIdAndRemove(req.params.id);
    res.json({ message: 'Preso eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { obtenerPresos, agregarPreso, eliminarPreso };
