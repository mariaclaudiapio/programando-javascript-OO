export class ContaCorrente {
    agencia;
    cliente;

    // #saldo = 0; (essa forma de escrita ainda é só uma proposta)
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor; // o return para a execução do método
        }else {
            console.log("Você não tem saldo suficiente para essa transação.")
        }
    }

    depositar(valor) {
        if(valor <= 0) return;
        this._saldo += valor; 
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}