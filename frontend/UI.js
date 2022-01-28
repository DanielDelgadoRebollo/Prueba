import BookService from './services/BookService';
const bookService = new BookService();

import { format } from 'timeago.js';

class UI {

  async renderBooks() {
    const books = await bookService.getBooks();
    const booksCardContainer = document.getElementById('books-cards');
    booksCardContainer.innerHTML = '';
    books.forEach((book) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${book.imagePath}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
<<<<<<< HEAD
                    <h4 class="card-title">${usuario.usuario}</h4>
                    <p class="card-text">${usuario.nombre}</p>
                    <a href="#" class="btn btn-danger delete" _id="${usuario._id}">X</a>
=======
                    <h4 class="card-title">${book.nombre}</h4>
                    <p class="card-text">${book.password}</p>
                    <p class="card-text">${book.sexo}</p>
                    <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
>>>>>>> 05c1e4a7958ea0765ac38f78664da99552273758
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(book.created_at)}
        </div>
      </div>
      `;
      booksCardContainer.appendChild(div);
    });
  }

  async addANewBook(book) {
    await bookService.postBook(book);
    this.renderBooks();
    this.clearBookForm();
  }

<<<<<<< HEAD
  clearUsuarioForm() {
    document.getElementById('usuario-form').reset();
    document.getElementById('usuario').focus();
=======
  clearBookForm() {
    document.getElementById('book-form').reset();
    document.getElementById('title').focus();
>>>>>>> 05c1e4a7958ea0765ac38f78664da99552273758
  }

  renderMessage(message, colorMessage, secondsToRemove) {
    // Creating a div
    const div = document.createElement('div');
    // Styling the div
    div.className = `message ${colorMessage}`;
    // Adding Text to the div
    div.appendChild(document.createTextNode(message));
    // Puting in the documnet
    const container = document.querySelector('.col-md-4');
    const bookForm = document.querySelector('#book-form');
    container.insertBefore(div, bookForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

<<<<<<< HEAD
  async deleteUsuario(usuarioId) {
    await usuarioService.deleteUsuario(usuarioId);
    this.renderUsuarios();
=======
  async deleteBook(bookId) {
    await bookService.deleteBook(bookId);
    this.renderBooks();
>>>>>>> 05c1e4a7958ea0765ac38f78664da99552273758
  }

}

export default UI;
