const soma = function (x,y){
    return x + y
}

const imprimirResultado = function (a,b,operacao = soma){ //default de operacao será a function soma
    console.log(operacao(a,b))
} 
imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4,function(x,y){//passando como 3º parametro uma função anonima que será executada.
    return x - y
})

imprimirResultado(3,4,(x,y)=> x * y)//função anonima passando o 3º parametro como arrow function

//objeto com um atributo function anonima
const pessoa = {
    falar: function(){
        console.log("Opa, tudo bem?")
    }
}
pessoa.falar()


//objeto com um atributo arrow function sem parametro
const pessoa1 = {
    falar: () => console.log("Opa, tudo bem arrow function?")
}
pessoa1.falar()