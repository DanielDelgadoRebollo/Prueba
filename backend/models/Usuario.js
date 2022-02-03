const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    usuario: { type: String, required: true },
    contrasenia: { type: String, required: true },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    edad: { type: Number, required: true },
    localizacion: { type: String, required: true },
    email: { type: String, required: true },
    sexo: { type: String, required: true },
    trabajo: { type: String, required: true },
    tarjetaBancaria: { type: String, required: true },
    nacionalidad: { type: String, required: true },
    fechaAlta: { type: Date, default: Date.now }
});

module.exports = model('Usuario', UsuarioSchema);