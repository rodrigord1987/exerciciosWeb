//objeto - coleção de pares chava/valor
//pode-se criar um objeto dessa forma
const produto = new Object
produto.nome='cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 200
console.log(produto)
console.log(produto.preco)

delete produto.preco //deletar um atributo do objeto
console.log(produto)

//pode-se criar um objeto dessa forma
const carro = {
    modelo: 'c4',
    valor: 90000,
    proprietario : {
        nome: 'Rodrigo',
        idade: 31,
        endereco:{
            logradouro:'Henrique Miers',
            numero:'178'
        }
    },
    condutores:[{
        nome: 'Rodrigo',
        qtdPorSemana: 3
    },
    {   
        nome:'Bruna',
        qtdPorSemana:4

    }],
    calcularValorSeguro: function(){
        //...
    }
}

console.log(carro)
//delete carro.condutores
console.log(carro)
console.log(carro.condutores.length)