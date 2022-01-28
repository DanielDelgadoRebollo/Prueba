import usuarioService from './services/UsuarioService';
const UsuarioService = new UsuarioService();

import { format } from 'timeago.js';

class UI {

  async renderBooks() {
    const user = await UsuarioService.getUser();
    const usuarioCardContainer = document.getElementById('usuario-cards');
    usuarioCardContainer.innerHTML = '';
    usuario.forEach((user) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${user.usuario}</h4>
                    <p class="card-text">${user.nombre}</p>
                    <a href="#" class="btn btn-danger delete" _id="${user._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(user.created_at)}
        </div>
      </div>
      `;
      usuarioCardContainer.appendChild(div);
    });
  }

  async addANewBook(usuario){
    await UsuarioService.postUsuarios(usuario);
    this.renderBooks();
    this.clearBookForm();
  }

  clearUsuarioForm() {
    document.getElementById('usuario-form').reset();
    document.getElementById('usuario').focus();
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

  async deleteUsuario(usuarioId) {
    await usuarioService.deleteUsuario(usuarioId);
    this.renderUsuarios();
  }

}

export default UI;
