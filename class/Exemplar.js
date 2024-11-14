class Exemplar extends Livro {
    constructor(id_exemplar, edicao, estado_conservacao, disp) {
        super(titulo, autor, paginas, editora, capa, cadastrador);
        this.id_exemplar = id_exemplar;
        this.edicao = edicao;
        this.estado_conservacao = estado_conservacao;
        this.disp = disp;
    }

    getId_exemplar() {
        return this.id_exemplar;
    }

    getEdicao() {
        return this.edicao;
    }

    getEstado_conservacao() {
        return this.estado_conservacao;
    }

    getDisp() {
        return this.disp;
    }

    setId_exemplar(id_exemplar) {
        this.id_exemplar = id_exemplar;
    }

    setEdicao(edicao) {
        this.edicao = edicao;
    }

    setEstado_conservacao(estado_conservacao) {
        this.estado_conservacao = estado_conservacao;
    }

    setDisp(disp) {
        this.disp = disp;
    }
}