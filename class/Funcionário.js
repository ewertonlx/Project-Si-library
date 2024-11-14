class Funcionario extends Pessoa {
    constructor(id_funcionario, cargo) {
        super(cpf, nome, rua, numero, bairro, cidade, estado, telefones, dt_nasc);
        this.id_funcionario = id_funcionario;
        this.cargo = cargo;
    }
}