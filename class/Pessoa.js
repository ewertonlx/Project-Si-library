class Pessoa {
    constructor(cpf, nome, rua, numero, bairro, cidade, estado, telefones, dt_nasc) {
        this.cpf = cpf;
        this.nome = nome;
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.telefones = telefones;
        this.dt_nasc = dt_nasc;
    }
    getCPF() {
        return this.cpf;
    }

    getNome() {
        return this.nome;
    }

    getRua() {
        return this.rua;
    }

    getNumero() {
        return this.numero;
    }

    getBairro() {
        return this.bairro;
    }

    getCidade() {
        return this.cidade;
    }

    getEstado() {
        return this.estado;
    }

    getTelefones() {
        return this.telefones;
    }

    getDtNasc() {
        return this.dt_nasc;
    }

    setCPF(cpf) {
        this.cpf = cpf;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setRua(rua) {
        this.rua = rua;
    }

    setNumero(numero) {
        this.numero = numero;
    }

    setBairro(bairro) {
        this.bairro = bairro;
    }

    setCidade(cidade) {
        this.cidade = cidade;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    setTelefones(telefones) {
        this.telefones = telefones;
    }

    setDtNasc(dt_nasc) {
        this.dt_nasc = dt_nasc;
    }
}