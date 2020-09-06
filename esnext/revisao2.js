// Arrow Function
// se necessita receber mais de um parametro, então tem que passar dentro de ()
// se não precisa do corpo da função, então  return será implícito
const soma = (a,b) => a + b
console.log(1,4)

//exemplo função condicionsal
const diminui = a => 's'? true:false
console.log(diminui('s'))

//exemplo função com corpo
const mutiplica = (a,b) => {
    return a * b
}
console.log(mutiplica(2,3))

//Arrow Function (this)
const lexico1 = ()=> console.log(this === exports)
lexico1()
const lexico2 = lexico1.bind({})
lexico2()

//parametro default
function log(texto = 'Node'){
    console.log(texto)
}
log()
log(undefined)
log(null)
log('Eu sou mais forte que o default')

// operador rest
//Pega os parametros enviado, trasforma em array na função e consigo trabalhar com array.
//no exemplo abaixo, apos receber os valor, entrou como array, e retornei a soma deles através do foreach
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))