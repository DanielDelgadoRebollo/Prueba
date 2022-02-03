import "./styles/app.css";

import Usuario from './models/Usuario.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderUser();
});


document.getElementById('usuario-form')
  .addEventListener('submit', function(e) {

    const usuario = document.getEle('usuario').value;
    const contrasenia = document.getElementsByName('contrasenia').value;
    const nombre = document.getElementsByName('nombre').value;
    const apellidos = document.getElementsByName('apellidos').value;
    const edad = document.getElementsByName('edad').value;
    const localizacion = document.getElementsByName('localizacion').value;
    const email = document.getElementsByName('email').value;
    const sexo = document.getElementsByName('sexo').value;
    const trabajo = document.getElementsByName('trabajo').value;
    const tarjetaBancaria = document.getElementsByName('tarjetaBancaria').value;
    const nacionalidad = document.getElementsByName('nacionalidad').value;
    
   

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
    if (user.usuario === '' || user.contrasenia === '' || user.nombre === '' || user.apellidos === '' || user.edad === '' || user.localizacion === '' 
    || user.email === '' || user.sexo === '' || user.trabajo === '' || user.tarjetaBancaria === '' || user.nacionalidad === '') {
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
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Book Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
