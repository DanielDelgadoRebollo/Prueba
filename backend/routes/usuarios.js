const { Router } = require('express');
const router = Router();

const path = require('path');
const { unlink } = require('fs-extra');

const Usuario = require('../models/Usuario');

router.get('/', async (req, res) => {
    const usuarios = await Usuario.find().sort('-_id');
    res.json(usuarios);
});

router.post('/', async (req, res) => {
    const { usuario, contrasenia, nombre, apellidos, edad, localizacion, email, sexo, trabajo, 
        tarjetaBancaria, nacionalidad } = req.body;
    const newUsuario = new Usuario({usuario, contrasenia, nombre, apellidos, edad, localizacion, email, sexo, trabajo, 
        tarjetaBancaria, nacionalidad});
    console.log(newUsuario)
    await newUsuario.save();
    res.json({'message': 'Usuario Saved'});
});

router.delete('/:id', async (req, res) => {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    await unlink(path.resolve('./backend/public/' + usuario.imagePath));
    res.json({message: 'Usuario Deleted'});
});


module.exports = router;