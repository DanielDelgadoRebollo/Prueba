class UsuarioService {

    constructor() {
        this.URI = `/api/usuarios`;
    }

    async getUsuarios() {
        const response = await fetch(this.URI);    
        const usuarios = await response.json();
        return usuarios;
    }

    async postUsuarios(usuario) {

        const res = await fetch(this.URI, {
            method: 'POST',
            body: usuario
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