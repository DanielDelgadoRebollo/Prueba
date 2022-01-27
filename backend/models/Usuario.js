const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    alias: { type: String, required: true },
    imagePath: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Usuario', UsuarioSchema);