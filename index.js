class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    // #saldo = 0; (ainda é só uma proposta)
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
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 12345678900;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 12345678901;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(300);
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);

