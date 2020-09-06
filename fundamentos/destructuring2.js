// Recurso do ES6
//Destruturando um array em variável
//estou pegando da primeira posição do array o valor e passando para a variável a
const [a] = [10]
console.log(a)

//tirando de cada posição do array e passando para as variáveis
const [b,c,d,e,f]=[2,4,6,8,10]
console.log(b,c,d,e,f)

//tentei fazer um laço, mas dá erro. porque não dá pra pegar um elemento, tem que ser o valor //let [valorPosicao]= meuArray[i]
const meuArray=[10,30,50,70,100]
console.log(meuArray.length)
for(i = 0; i < meuArray.length; i++){
   //let [valorPosicao]= meuArray[i]
   let valorPosicao= meuArray[i]
   console.log("valor da variavel valorPosicao:", valorPosicao)
}