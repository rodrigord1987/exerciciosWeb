let valor //não inicializada, então o valor é underfined
console.log(valor)

valor = null //variável não possui valor válido, ela está nulla, sem valor
console.log(valor)
//console.log(valor.toString()) //dará erro pq não tem como acessar uma variável sem valor

const produto = {}
console.log(produto.preco) //não existe o atributo preço então é underfined
console.log(produto) //existe um objeto produto, mas não possui valor, então acessa um endereço sem valor.

produto.preco = undefined //evite atribuir underfined. Deixa que o sistema o use.
console.log(produto.preco)
console.log(!!produto.preco) //retorna false pq é uma negação da negação que no caso o atributo preco está undefined

// delete produto.preco //caso queria excluir o atributo do objeto
console.log(produto)

produto.preco =null // atribuindo null para o atributo preco, ou seja, deixando ele sem preço