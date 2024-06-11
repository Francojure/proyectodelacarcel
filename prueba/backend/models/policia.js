const mongoose = require('mongoose');

const policiaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const Policia = mongoose.model('Policia', policiaSchema);

module.exports = Policia;

