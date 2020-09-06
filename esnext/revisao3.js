// ES8: Object.values / Object.entries
const obj = {a: 1,b:2,c:3}
console.log(Object.values(obj))//pega os valores do objeto e joga para um array
console.log(Object.entries(obj))//pega o objeto e transforma em uma matriz (array dentro de array) para cada chave/valor do obj

// Melhorias na Notação literal
const nome = 'Carla'
const pessoa= {
    nome, //consigo criar um atributo onde ele já pega o valor da variavel, sem eu precisar fazer na notação chave/valor
    olaMundo(){
        return 'Olá Mundo'
    }
}
console.log(pessoa.nome,pessoa.olaMundo())

//classe
class Animal{
}
class Cachorro extends Animal{
    falar(){
        return 'AUAU'
    }
}
console.log(new Cachorro().falar())
