//criando meu próprio método de filter
Array.prototype.filter2 = function(callback){
    const novoArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i],i,this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

//o método filter, serve para filtrar dados do array, criando um novo array
const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad', preco: 4199, fragil: false},
    {nome: 'Copo Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo Plastico', preco: 18.99, fragil: false},
]

//o filtro recebe o elemento do array, que neste caso é um array de objetos
console.log(produtos.filter2(function(p){
        return p.preco > 2000
}))

//exemplo para trazer duas funções encadeadas onde irá ver se é caro e se é frágil
const produtosCaros = produtos => produtos.preco >= 500
const produtosfrageis = produtos => produtos.fragil
console.log("Produto caro e fragil:",produtos.filter2(produtosCaros).filter2(produtosfrageis))