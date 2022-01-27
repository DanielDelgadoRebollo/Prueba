const { Schema, model } = require('mongoose');

const BookSchema = new Schema({
    nombre : { type: String, required: true },
    password : { type: String, required: true },
    sexo: { type: String, required: true },
    imagePath: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = model('Book', BookSchema);