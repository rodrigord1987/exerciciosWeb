//function declaration
// pode ser chamada antes
console.log(soma(3,4))
function soma(a,b){
    return a + b 
}

//function expression
//não pode ser chamada antes de possui a declaração da const sub
const sub = function(a,b){
    return a-b
}
console.log(sub(1,2))

//named function expression
//não pode ser chamada antes de possui a declaração da const mult
//não é muito utilizada essa forma, a não ser que precisa que apareça o nome da função no log
const mult = function mult(a,b){
    return a * b
}
console.log(mult(5,5))