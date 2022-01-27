class UsuarioService {

    constructor() {
        this.URI = `/api/books`;
    }

    async getUsuarios() {
        const response = await fetch(this.URI);    
        const usuarios = await response.json();
        return usuarios;
    }

    async postUsuarios(usuario) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
    }

    async deleteUsuario(usuarioId) {
        const res = await fetch(`${this.URI}/${bookId}`, {
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