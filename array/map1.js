const nums = [1,2,3,4,5]

console.log(nums)
//map com base no array original, cria um novo array com as devidas alterações
//exemplo abaixo, criou um novo array mutiplicando o valor do array original
let resultado = nums.map(function(indice){
    return indice * 2
})
console.log(resultado)

//criei 3 variaveis com funções arrow
const soma10 = indice => indice + 10
const triplo = indice => indice * 3
const paraDinheiro = indice => `R$${parseFloat(indice).toFixed(2).replace('.',',')}`

//o map permite criar array de array, com isso é fácil ir alterando o valor sem impactar no array original
//por fim, a partir do array original, somou 10 em cada elemento, depois triplicou o valor, e por ultimo alterou o formato para dinheiro
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)