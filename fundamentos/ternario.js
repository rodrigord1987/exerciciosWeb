//operador ternário.
//função arrow onde o operador ternário já faz todo o bloco de if else
//a variável resultado vira função que recebe a variavel nota e compara nota => 7 onde pode ser aprovador ou reprovado
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';

console.log(resultado(8))
console.log(resultado(4))


let deixaPraSegunda = decide => decide== "sim" ? true : false
console.log(deixaPraSegunda("sim"))