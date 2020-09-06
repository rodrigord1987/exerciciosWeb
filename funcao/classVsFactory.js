
//exemplo de uma classe
//Neste caso o ao acessar o this no contexto window, ela não será reconhecida.
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Rodrigo')
p1.falar()


//exemplo de uma função Factory
// neste contexto não preciso usar o this. o atributo nome fica disponível no contexto da função
// então neste caso, fica mais fácil utilizar a função factory nessa situação.
const criarPessoa = nome =>{
    return{
        falar: () => { console.log(`Meu nome é ${nome}`)}
    }
}

const p2 = criarPessoa('Rodrigo dos Reis')
p2.falar()
