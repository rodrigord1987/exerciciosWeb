function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20 // preco está no escopo global na função getPreco()
global.desc = 0.1 //desc está no escopo global na função getPreco()
console.log(getPreco())
console.log(produto.getPreco())//como no objeto produto tem um atributo getPreco esse já considera a função getPreco()


const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//no call temos que passar o contexto, neste caso é o nome do objeto seguido dos parametros que a função getPreco precisa
console.log(getPreco.call(carro,0.17,'$')) 
//no apply temos que passar o contexto, neste caso é o nome do objeto seguido dos parametros que a função getPreco precisa mas
//no formato de array
console.log(getPreco.apply(carro,[0.17,'$']))