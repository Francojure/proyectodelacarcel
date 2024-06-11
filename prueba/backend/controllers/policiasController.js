const Policia = require('../models/policia');

const obtenerPolicias = async (req, res) => {
  try {
    const policias = await Policia.find();
    res.json(policias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const agregarPolicia = async (req, res) => {
  const nuevoPolicia = new Policia(req.body);
  try {
    const policiaGuardado = await nuevoPolicia.save();
    res.status(201).json(policiaGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const actualizarPolicia = async (req, res) => {
  try {
    const policiaActualizado = await Policia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(policiaActualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const eliminarPolicia = async (req, res) => {
  try {
    await Policia.findByIdAndDelete(req.params.id);
    res.json({ message: 'Policia eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  obtenerPolicias,
  agregarPolicia,
  actualizarPolicia,
  eliminarPolicia
};
