//o tipo de array em js, é do tipo objeto

const valores = [7.5,3.4,1,4.4]
console.log(valores[0])//posição 0 do array
console.log(valores[1],valores[3]) //posição 1 e 3 do array

valores[4]=10//inserindo na posição 4 do array o valor 10
console.log(valores[4])
console.log(valores.length)//me da o tamanho do array
valores.push({id:3},false,null,'teste')//adicionando valores no array. Aceita todo tipo de valor
console.log(valores)
console.log(valores.pop())//deleta o ultimo indice do array
console.log(valores)
delete valores[0]//deleta a posição do array
console.log(valores)//vai mostrar que a primeira posição está vazia
console.log(typeof valores)//mostra o tipo do array, que no caso do JS array sempre é um objeto

