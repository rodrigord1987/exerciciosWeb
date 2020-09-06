//criando meu próprio método de map
Array.prototype.map2 = function(callback){
    const novoArray = []
    for (let i = 0; i < this.length; i++){
        novoArray.push(callback(this[i],i,this))
    }
    return novoArray
}

//de um array, pegando apenas os preços
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => `R$${parseFloat(produto.preco).toFixed(2).replace('.',',')}` 
const precos = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(precos)