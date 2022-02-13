"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var usuarioSchema = new _mongoose.Schema({
  ID: Number,
  Usuario: {
    type: String,
    unique: true
  },
  Contrasenia: String,
  Nombre: String,
  Apellido: String,
  Localidad: String,
  Edad: Number,
  Email: {
    type: String
  },
  FechaAlta: Date,
  TarjetaBancaria: String,
  Nacionalidad: String,
  Monedas: Number
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Usuario', usuarioSchema);

exports["default"] = _default;