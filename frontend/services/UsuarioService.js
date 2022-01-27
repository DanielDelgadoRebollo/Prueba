class UsuarioService {

    constructor() {
        this.URI = `/api/usuarios.js`;
    }

    async getUsuarios() {
        const response = await fetch(this.URI);    
        const usuarios = await response.json();
        return usuarios;
    }

    async postUsuario(usuario) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: usuario
        });
        const data = await res.json();
    }

    async deleteUsuario(usuarioId) {
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