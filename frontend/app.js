import "./styles/app.css";

import Book from './models/Book.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderBooks();
});


document.getElementById('book-form')
  .addEventListener('submit', function(e) {

    const usuario = document.getElementById('usuario').value;
    const contrasenia = document.getElementById('contrasenia').value;
    const nombre = document.getElementById('nombre').value;
<<<<<<< HEAD
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
=======
    const password = document.getElementById('password').value;
    const sexo = document.getElementById('sexo').value;

    const formData = new FormData();
  
    formData.append('nombre', nombre);
    formData.append('password', password);
    formData.append('sexo', sexo);
>>>>>>> 05c1e4a7958ea0765ac38f78664da99552273758

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
<<<<<<< HEAD
    const user= new Usuario(usuario, contrasenia, nombre, apellidos, edad, localizacion, email, sexo, trabajo, 
      tarjetaBancaria, nacionalidad);

    // Validating User Input
    if (usuario === '' || contrasenia === '' || nombre === '' || apellidos === '' || edad === '' || localizacion === '' 
    || email === '' || sexo === '' || trabajo === '' || tarjetaBancaria === '' || nacionalidad === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewUsuario(formData);
=======
    const book = new Book(nombre, password, sexo);

    // Validating User Input
    if (nombre === '' || password === '' || sexo === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewBook(formData);
>>>>>>> 05c1e4a7958ea0765ac38f78664da99552273758
      ui.renderMessage('New Book Added Successfully', 'success', 2000);
    }

    e.preventDefault();
  });

document.getElementById('books-cards')
  .addEventListener('click', e => {
    const ui = new UI();
    if (e.target.classList.contains('delete')) {
      ui.deleteBook(e.target.getAttribute('_id'));
      ui.renderMessage('Book Deleted Successfully', 'success', 3000);
    }
    e.preventDefault();
  });
