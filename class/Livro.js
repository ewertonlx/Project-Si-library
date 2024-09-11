class Livro {
    constructor(titulo, autor, paginas, editora, capa) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.editora = editora;
        this.capa = capa;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getPaginas() {
        return this.paginas;
    }
    getEditora() {
        return this.editora;
    }
    getCapa() {
        return this.capa;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    setPaginas(paginas) {
        this.paginas = paginas;
    }
    setEditora(editora) {
        this.editora = editora;
    }
    setCapa(capa) {
        this.capa = capa;
    }
}