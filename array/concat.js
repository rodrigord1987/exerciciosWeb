//concat concatena os dados de um array e um outro array nov
const filhas = ['ana','aninha','debora']
const filhos = ['rodrigo', 'pedro','joão']
const todos = filhas.concat(filhos)
console.log(todos)
//exemplo concatenando novos dados em um array vazio
console.log([].concat(1,2,3,[4,5],[[6,7]]))
//concatenando novos dados em um array literal.
console.log(['a','b'].concat(1,2,3,[4,5],[[6,7]]))