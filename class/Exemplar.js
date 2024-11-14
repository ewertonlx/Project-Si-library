class Exemplar extends Livro {
    constructor(id_exemplar, edicao, estado_conservacao, disp) {
        super(titulo, autor, paginas, editora, capa, cadastrador);
        this.id_exemplar = id_exemplar;
        this.edicao = edicao;
        this.estado_conservacao = estado_conservacao;
        this.disp = disp;
    }
}