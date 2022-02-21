export class Clientes {

    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
        this._senha;
    }

    get cpf() {
        this._cpf;
    }

    autenticar(senha) {
        return senha == this._senha;
    }
    cadastrarsenha(senha) {
        this._senha = senha;
    }

}