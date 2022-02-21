import { Conta } from "./Contas.js";

export class ContaCorrente extends Conta {

    static numerodecontas = 0;

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numerodecontas += 1;
    }
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

}