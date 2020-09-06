console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//possibilidade de criar métodos dentro de String
String.prototype.reverse = function () {
    return this.split('').reverse().join('') //vai pegar a string reverter a posição dos caracteres e retornar
}
console.log('Rodrigo dos Reis'.reverse())

//possibilidade de criar métodos dentro de Array. Retorna um valor de uma posição do array
Array.prototype.first = function (indice){
    return this[indice]
}
console.log(['rodrigo','31','09/11/1987'].first(2))
