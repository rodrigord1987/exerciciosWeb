console.log(typeof Object)//tipo do objeto aqui é Função
console.log(typeof new Object)//aqui o tipo do objeto forcei para ser do tipo objeto

const cliente = function(){}//variavel cliente recebe uma função anonima
console.log(typeof cliente) 
console.log(typeof new cliente)//forcei a função cliente, ser um objeto

class produto{} //definição classe ES 2015 (ES6) a parti do ES6 é possível trablhar com classe no js
console.log(typeof produto)//mesmo sendo uma classe, o tipo dela é função
console.log(typeof new produto)//aqui forçando ser um objeto

const item = {} //aqui declarando a variável item do tipo objeto
console.log(typeof item) //irá printar um objeto, ou seja, ao declarar a variável com {} não precisa instanciar novamente
