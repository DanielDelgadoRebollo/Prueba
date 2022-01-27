import "./styles/app.css";

import Book from './models/Book.js';
import UI from './UI.js';

document.addEventListener('DOMContentLoaded', () => {
  const ui = new UI();
  ui.renderBooks();
});


document.getElementById('book-form')
  .addEventListener('submit', function(e) {

    const nombre = document.getElementById('nombre').value;
    const password = document.getElementById('password').value;
    const sexo = document.getElementById('sexo').value;
    
    const image = document.getElementById('image').files;

    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('nombre', nombre);
    formData.append('password', password);
    formData.append('sexo', sexo);

    // for(var pair of formData.entries()) {
    //   console.log(pair[0]+', '+pair[1]);
    // }

    // Instatiating the UI
    const ui = new UI();

    // New Book Object
    const book = new Book(nombre, password, sexo);

    // Validating User Input
    if (title === '' || author === '' || isbn === '') {
      ui.renderMessage('Please fill all the fields', 'error', 3000);
    } else {
      // Pass the new book to the UI
      ui.addANewBook(formData);
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
