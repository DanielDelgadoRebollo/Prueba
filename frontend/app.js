import "./styles/app.css";

import Usuario from './models/Usuario.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderUsuarios();
});


document.getElementById('usuario-form')
  .addEventListener('submit', function(e) {

    const usuario = document.getElementById('usuario').value;
    const contrasenia = document.getElementById('contrasenia').value;
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const edad = document.getElementById('edad').value;
    const localizacion = document.getElementById('localizacion').value;
    const email = document.getElementById('email').value;
    const sexo = document.getElementById('sexo').value;
    const trabajo = document.getElementById('trabajo').value;
    const tarjetaBancaria = document.getElementById('tarjetaBancaria').value;
    const nacionalidad = document.getElementById('nacionalidad').value;
    
   

    const formData = new FormData();
    formData.append('usuario', usuario);
    formData.append('contrasenia', contrasenia);
    formData.append('nombre', nombre);
    formData.append('apellidos', apellidos);
    formData.append('edad', edad);
    formData.append('localizacion', localizacion);
    formData.append('email', email);
    formData.append('sexo', sexo);
    formData.append('trabajo', trabajo);
    formData.append('tarjetaBancaria', tarjetaBancaria);
    formData.append('nacionalidad', nacionalidad);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const user= new Usuario(usuario, contrasenia, nombre, apellidos, edad, localizacion, email, sexo, trabajo, tarjetaBancaria, nacionalidad);

    // Validating User Input
    if (usuario === '' || contrasenia === '' || nombre === '' || apellidos === '' || edad === '' || localizacion === '' 
    || email === '' || sexo === '' || trabajo === '' || tarjetaBancaria === '' || nacionalidad === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewBook(formData);
      ui.renderMessage('New Book Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('usuarios-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteUsuario(e.target.getAttribute('_id'));
      ui.renderMessage('Book Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
