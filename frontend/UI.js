import UsuarioService from './services/UsuarioService';
const usuarioService = new UsuarioService();

import { format } from 'timeago.js';

class UI {

  async renderUsuarios() {
    const usuarios = await usuarioService.getUsuarios();
    const usuariosCardContainer = document.getElementById('usuarios-cards');
    usuariosCardContainer.innerHTML = '';
    usuarios.forEach((usuario) => {
      const div = document.createElement('div');
      div.className = 'animated fadeInRight';
      div.innerHTML = `
      <div class="card m-2">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${usuario.imagePath}" class="img-fluid" alt="">
            </div>
            <div class="col-md-8">
                <div class="card-block px-2">
                    <h4 class="card-title">${usuario.nombre}</h4>
                    <p class="card-text">${usuario.apellidos}</p>
                    <a href="#" class="btn btn-danger delete" _id="${usuario._id}">X</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
          ${format(usuario.created_at)}
        </div>
      </div>
      `;
      usuariosCardContainer.appendChild(div);
    });
  }

  async addANewUsuario(usuario) {
    await usuarioService.postUsuario(usuario);
    this.renderUsuarios();
    this.clearUsuarioForm();
  }

  clearUsuarioForm() {
    document.getElementById('usuario-form').reset();
    document.getElementById('nombre').focus();
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
    const usuarioForm = document.querySelector('#usuario-form');
    container.insertBefore(div, usuarioForm);
    // Removing the div after some secconds
    setTimeout(() => {
      document.querySelector('.message').remove();
    }, secondsToRemove);
  }

  async deleteUsurio(usuarioId) {
    await usuarioService.deleteUsuario(usuarioId);
    this.renderUsuarios();
  }

}

export default UI;
