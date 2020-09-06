
const sequencia = {
    _valor: 1, //é uma convenção colocar um underline antes pra dizer que a variavel é privada e acessa apenas via get e set
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
           this._valor = valor
        }
    }
}

//acessando duas vezes ele incrementou o valor
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //como a condição só aceita valor > que o atual, então desconsidera esse valor
console.log(sequencia.valor, sequencia.valor)
