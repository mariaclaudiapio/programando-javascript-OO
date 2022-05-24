import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    // #saldo = 0; (essa forma de escrita ainda é só uma proposta)
    _saldo = 0;

    get saldo() {
        return this._saldo;
    } //serve para encapsular o elemento

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