import Usuario from "../../backend/models/Usuario";

class UsuarioService {

    constructor() {
        this.URI = `/api/Usuario`;
    }

    async getUsuario() {
        const response = await fetch(this.URI);    
        const usuario = await response.json();
        return usuario;
    }

    async postUsuarios(usuario) {

        const res = await fetch(this.URI, {
            method: 'POST',
            body: Usuario
        });
        const data = await res.json();

    }

    async deleteUser(usuarioId) {
        const res = await fetch(`${this.URI}/${usuarioId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default UsuarioService;