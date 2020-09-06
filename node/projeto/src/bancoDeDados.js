const sequence = { // função utilizada para incremento do id. Ela não será uma função exposta a outros módulos
    _id: 1,
    get id() {return this._id++} //função arrow que retorna o id incrementado
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProdutos(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos,excluirProdutos} //o que ficará exposto para outros módulos