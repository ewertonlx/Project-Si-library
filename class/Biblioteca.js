class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionar(livro) {
        this.livros.push(livro);
    }

    buscarPorAutor(autor) {
        return this.livros.filter(livro => livro.autor === autor);
    }

    buscarPorTitulo(titulo) {
        return this.livros.filter(livro => livro.titulo === titulo);
    }

    listarLivros() {
        return this.livros;
    }
}