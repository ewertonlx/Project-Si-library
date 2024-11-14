class Funcionario extends Pessoa {
    constructor(id_funcionario, cargo) {
        super(cpf, nome, rua, numero, bairro, cidade, estado, telefones, dt_nasc);
        this.id_funcionario = id_funcionario;
        this.cargo = cargo;
    }

    getId_funcionario() {
        return this.id_funcionario;
    }

    getCargo() {
        return this.cargo;
    }

    setId_funcionario(id_funcionario) {
        this.id_funcionario = id_funcionario;
    }

    setCargo(cargo) {
        this.cargo = cargo;
    }
}