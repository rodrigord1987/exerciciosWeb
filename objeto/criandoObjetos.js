//usando a notação literal
const obj1 = {}
console.log(obj1)

//criando objeto em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funçõs construtoras
//neste caso o this permite que a variavel nome fique disponível para ser alterada após ter o obejto criado
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}
const prod1 = new Produto("note",1000,0.10)
const prod2 = new Produto("bike",2000,0)
console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto())
prod1.nome="notebook"
console.log(prod1.nome)

//Função Factory(padrão de projeto) é responsável por ser fábrica de objeto

function criarFuncionario(nome,salrioBase,faltas){
    return{
        nome,
        salrioBase,
        faltas,
        getRetornaSalarioAPagar(){
            return (salrioBase / 30) * (30 - faltas)
        }
    }
}

const func1 = criarFuncionario("Pedro",1000,1)
console.log(func1.getRetornaSalarioAPagar())

//Object.Create -- utilizado quando trabalha com herança
const filha = Object.create(null)
filha.nome = 'Lorena'
console.log(filha.nome)

//uma função famosa que converte um json para um objeto
//o parse faz essa conversão de um json(valor em texto) para um objeto, assim fica fácil
//manipular o que veio na requisição por exemplo todo o texto json ficou em campo valor (objeto)
const fromJson = JSON.parse('{"info":"Sou um Json convertido em um objeto"}')
console.log(fromJson.info) 

//json é texto
//objeto é regido pela notação de objeto