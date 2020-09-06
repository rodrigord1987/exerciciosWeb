//Recurso do ES6, pegando os valores do array e jogando para variavel direto na função
function rand([min=0, max=1000]){
    if(min > max) [min,max] = [max,min]//se min é maior que max, então passa o valor de max para min
    const valor = Math.random() * (max - min ) + min
    return Math.floor(valor)//floor - arredondando para baixo.
}

console.log(rand([10,20]))//passando o valor mínimo e maximo para o array
console.log(rand([50,48]))//passando o valor min como maior que o máximo
console.log(rand([]))//passando um array vazio, para considerar os valores default
console.log(rand([,2]))//passando um valor apenas da segunda posição, que no caso é o max