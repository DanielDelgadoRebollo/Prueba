import "./styles/app.css";

import Usuario from './models/Usuario.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderUsuarios();
});


document.getElementById('usuario-form')
  .addEventListener('submit', function(e) {

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const alias = document.getElementById('alias').value;
    
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('nombre', nombre);
    formData.append('apellidos', apellidos);
    formData.append('alias', alias);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const usuario = new Usuario(nombre, apellidos, alias);

    // Validating User Input
    if (nombre === '' || apellidos === '' || alias === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewUsuario(formData);
      ui.renderMessage('New Usuario Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('usuarios-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteUsuario(e.target.getAttribute('_id'));
      ui.renderMessage('Usuario Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
