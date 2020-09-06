// let e var
// var tem visão fora do contexto de bloco. Let é dentro do bloco.
{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)

//template string. 
//Serve para interpolar variaveis e fazer quebras de linhas...
const produto = 'iPad'
console.log(`${produto} é caro`)
console.log(`${produto} é caro.
 Mas o pessoal compras`)

 //Destructuring 
 //Server para destruturar um dado, array ou objeto em variaveis
 const [l,e,...tras] = 'Cod3r'
 console.log(l,e,tras)

const [x, , y] = [1,2,3] //destruturando um array intercalando os valores que preciso
console.log(x,y)

const {idade:i, nome} = {nome: 'Rodrigo', idade: 31}//destruturando atributos de um objeto renomeando a variavel idade para i
console.log(i,nome)

