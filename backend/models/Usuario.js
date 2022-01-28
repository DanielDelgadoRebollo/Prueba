const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    ID: { type: Number, required: true },
    Usuario: { type: String, required: true },
    Contrasenia: { type: String, required: true },
    Nombre: { type: String, required: true },
    Apellidos: { type: String, required: true },
    Edad: { type: Number, required: true },
    Localizacion: { type: String, required: true },
    Email: { type: String, required: true },
    Sexo: { type: String, required: true },
    Trabajo: { type: String, required: true },
    TarjetaBancaria: { type: String, required: true },
    Nacionalidad: { type: String, required: true },
    FechaAlta: { type: Date, default: Date.now }
});

module.exports = model('Usuario', UsuarioSchema);