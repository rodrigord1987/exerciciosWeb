//Criando objeto a partir de classe e função construtora e função factory
//Exemplo de uma classe e possuindo o construtor para declarar os atributos
/*class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Rodrigo')
p1.falar()
*/

//Exemplo de uma função construtora.
function Pessoa(nome){
    //atribuir a variável ao this, pra que ela fique disponível externamente.
    this.nome = nome
    this.getFalar = () => console.log(`Meu nome é ${this.nome}`)
}

const p1 = new Pessoa('Rodrigo dos Reis')
//acessando a função getFalar
p1.getFalar()
//acessando o atributo nome do objeto p1
console.log(p1.nome)
