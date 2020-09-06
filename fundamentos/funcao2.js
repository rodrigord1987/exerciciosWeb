//função anonima, onde o nome da função é a variaval soma1
const soma1 = function(a,b){
    return a + b
}
console.log(soma1(2,3))

//função arrow, onde a palavra reservada function é substituida pelos simbolos =>
const soma2 = (a,b)=>{
    return a+b
}
console.log(soma2(2,3))

//função com retorno implícito, quando a função possui apenas uma linha
const soma3 = (a,b)=> a+b
console.log(soma3(2,3))

//função com 1 parmetro apenas, não precisa colocar dentro de ()
const imprimirValor = a => a
console.log(imprimirValor(2))
//retornando um console.log com o valor da variável b
const imprimirTexto = b => console.log(b)
imprimirTexto("Que legal né!!!")