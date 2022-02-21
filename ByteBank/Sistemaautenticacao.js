export class Sistemaautenticação {
    static login(autenticavel, senha) {
        if (Sistemaautenticação.eAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static eAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
            autenticavel.autenticar instanceof
        Function
    }
}