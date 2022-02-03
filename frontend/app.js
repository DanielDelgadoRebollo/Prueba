import "./styles/app.css";

import Usuario from './models/Usuario.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderUsuarios();
});


document.getElementById('usuario-form')
  .addEventListener('submit', function(e) {

    const usuario = document.getElementsById('usuario').value;
    const contrasenia = document.getElementsById('contrasenia').value;
    const nombre = document.getElementsById('nombre').value;
    const apellidos = document.getElementsById('apellidos').value;
    const edad = document.getElementsById('edad').value;
    const localizacion = document.getElementsById('localizacion').value;
    const email = document.getElementsById('email').value;
    const sexo = document.getElementsById('sexo').value;
    const trabajo = document.getElementsById('trabajo').value;
    const tarjetaBancaria = document.getElementsById('tarjetaBancaria').value;
    const nacionalidad = document.getElementsById('nacionalidad').value;
    
   

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
    const user= new Usuario(usuario, contrasenia, nombre, apellidos, edad, localizacion, email, sexo, trabajo, 
      tarjetaBancaria, nacionalidad);

    // Validating User Input
    if (usuario === '' || contrasenia === '' || nombre === '' || apellidos === '' || edad === '' || localizacion === '' 
    || email === '' || sexo === '' || trabajo === '' || tarjetaBancaria === '' || nacionalidad === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewUsuario(formData);
      ui.renderMessage('New Book Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('usuario-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteUsuario(e.target.getAttribute('_id'));
      ui.renderMessage('Book Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
