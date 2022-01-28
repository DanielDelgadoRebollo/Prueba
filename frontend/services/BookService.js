class BookService {

    constructor() {
        this.URI = `/api/books`;
    }

    async getBooks() {
        const response = await fetch(this.URI);    
        const books = await response.json();
        return books;
    }

<<<<<<< HEAD:frontend/services/UsuarioService.js
    async postUsuarios(usuario) {
=======
    async postBook(book) {
>>>>>>> 05c1e4a7958ea0765ac38f78664da99552273758:frontend/services/BookService.js
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
    }

    async deleteBook(bookId) {
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

export default BookService;