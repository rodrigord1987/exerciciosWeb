const notas = [7.1,3.4,1.9,6.9,8.3,9.9,2.5,4.4]

//sem callback
//sou obrigado a criar um novo array, fazer um for pra ler o array notas, e a cada valor encontrador, 
//usar o push para incluir no novo array
const notasBaixas = []
for(let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback. Ou seja, sempre que houver um valor no array, ele executa o callback(neste caso a função filter)

//usando com uma função normal
const notasBaixas2 = notas.filter(function(notas){
    return notas < 7
})

console.log(notasBaixas2)

//usando com função arrow
const notasBaixas3 = notas.filter(notas=> notas < 7)
console.log(notasBaixas3)

//usando o arrow como se fosse uma variavel, assim daria pra reutilizar a função arrow em vários pontos
let retornaNotasMenorQue7 = notas => notas < 7
const notasBaixas4 = notas.filter(retornaNotasMenorQue7)
const notasBaixas5 = notas.filter(retornaNotasMenorQue7)
console.log(notasBaixas4)
console.log(notasBaixas5)
