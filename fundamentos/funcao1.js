//Função sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma()//se não passar valor, as variaveis da função ficam undefined e o print será NaN
imprimirSoma(2)//se passar só 1 valor, tbm ficará NaN
imprimirSoma(2,3)//irá somar
imprimirSoma(2,3,4,5)//os demais parametros ele ignora

//Função com retorno
function soma(a,b=1){ //valor padrão da variável b é 1. Se ela não receber nenhum valor, utilizará este valor
    return a+b
}
console.log(soma(2,2))//irá somar e retornará o resultado
console.log(soma(2))//irá somar 2 com o valor default da variável b
console.log(soma())//iré retornar NaN, pois o valor de b é 1 mas o valor de a não foi passado
