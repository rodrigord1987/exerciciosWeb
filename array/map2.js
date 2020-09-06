//de um array, pegando apenas os preços
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//faço duas variavels com função arrow para alterar o elemento de json para um objetivo
const paraObjeto = json => JSON.parse(json)
//depois guardo na variavel apenas o preço de cada elemento do array
const apenasPreco = produto => produto.preco
//depois utilizo o map para retonar só o preço de todos os elementos
const precos = carrinho.map(paraObjeto).map(apenasPreco)
console.log(precos)