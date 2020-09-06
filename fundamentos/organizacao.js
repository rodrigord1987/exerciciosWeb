const c = 50
//c = 51 //não é possível alterar o valor da constante
console.log(c)

var a = 55

let b = 60
//começar a usar let para declarar variável, visto que ela está substituindo a palavra reservada var. Possui mais segurança, não 
//permite declarar a mesma variável duas vezes etc.

console.log(typeof b) //saber o tipo da variável

const valor = Number('2.12344432') //posso declarar o numero assim
const valor2 = 2.321            // ou assim
console.log(valor, valor2)
console.log(valor.toFixed(3))//dizendo que quero apenas 3 casas decimais

//String
let escola = 'Arnaldo'
console.log(escola.charAt(2))//busca o valor na posição 2
console.log(escola.charCodeAt(0))//busca o código ASI da posição 0
console.log(escola.indexOf('l'))//busca a posição da string pesquisada, neste caso o 'l'
console.log(escola.substring(1))//retorna a string a partir da posição passada como parametro
console.log(escola.substring(1,4))//retorna a string a partida da posição passada, mais a quantidaed de posição passada no segundo parametro
console.log(escola.concat("!")) //concatena as strings
console.log('Escola '.concat(escola).concat("!")) //concatena as strings
console.log('Escola ' + escola + '!') //concatena as strings
console.log(escola.replace("A","W")) //replace do caraceter "A" pelo "W"
console.log('ANA,MARIA,BIA,Felicidade'.split(","))//quebra a string em um array tomando como base o separador ","

//template string ES6
const nome = "Rodrigo"
const concatena = 'Olá ' + nome +'!'
console.log(concatena)
const templateString = `Olá
    ${nome}!`
console.log(templateString)

//expressões utilizando template string
console.log(`1+1 + ${1+1}`) //além da string, ele executa a expressão

const up = texto => texto.toUpperCase() //Interpolação. Executa uma função arrow já na atribuição da variavel
console.log(`Ei...${up("cuidado")}!`)

//boolean
let isAtivo = true
console.log(isAtivo)
isAtivo = false
console.log(isAtivo)
isAtivo = 1
console.log(!!isAtivo)//!!: significa uma negação da negação

console.log('Os verdadeiros...')
console.log(!!3)//qualquer inteiro diferente de 0 é verdadeiro
console.log(!!-1)//qualquer inteiro diferente de 0 é verdadeiro
console.log(!!' ')//um caracter em branco é verdadeiro
console.log(!!'texto')//uma string é verdadeiro
console.log(!![])//um array vazio é verdadeiro
console.log(!!{})//um objeto é verdadeiro
console.log(!!Infinity)//um valor infinito é verdadeiro
console.log(!!(isAtivo = true)) //um teste de variável

console.log('Os falsos...')
console.log(!!0)//0 é falso. Ou seja, negação da negação neste caso o 0
console.log(!!"")//uma string vazia é falsa
console.log(!!null)//null é falso
console.log(!!NaN)//um valor não conhecido
console.log(!!undefined)//um valor indefinido
console.log(!!(isAtivo=false))//negação da negação da variavel com valor falso

console.log("Pra finalizar...")
console.log(!!(""||null||0||' '))//condição para imprimir o primeiro valor verdadeiro, no caso o caracter em branco
let name =''
console.log(nome||"Rodrigo")//se nome for falso, então imprime Rodrigo
name = 'Bruna'
console.log(name||"Rodrigo")//neste caso, name agora é true, então irá imprimir Bruna