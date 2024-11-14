class Emprestimo {
    constructor(id_emprestimo, dt_emprestimo, dt_devolucao){
        this.id_emprestimo = id_emprestimo;
        this.dt_emprestimo = dt_emprestimo;
        this.dt_devolucao = dt_devolucao;
    }

    getId_emprestimo(){
        return this.id_emprestimo;
    }

    getDt_emprestimo(){
        return this.dt_emprestimo;
    }

    getDt_devolucao(){
        return this.dt_devolucao;
    }

    setId_emprestimo(id_emprestimo){
        this.id_emprestimo = id_emprestimo;
    }

    setDt_emprestimo(dt_emprestimo){
        this.dt_emprestimo = dt_emprestimo;
    }

    setDt_devolucao(dt_devolucao){
        this.dt_devolucao = dt_devolucao;
    }
}