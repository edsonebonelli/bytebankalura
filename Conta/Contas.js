export class Conta {
    constructor(saldoinicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error(" Obs: Você não deveria instanciar um objeto do tipo conta Diretamente");
        }

        this._saldo = saldoinicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Método Abstrato
    sacar(valor) {
        throw new Error("O método da conta é Abstrato");

    }

    _sacar(valor, taxa) {
        const valorsacado = taxa * valor;
        if (this._saldo >= valorsacado) {
            this._saldo -= valorsacado;
            return valorsacado;
        }
    }

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}