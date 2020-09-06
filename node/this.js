console.log(this === global) //false this não aponta para global quando está fora de uma função
console.log(this === module)//false, this não aponta para module

console.log(this === module.exports)//true, this aponta para o objeto exports que por sua vez está dentro de module
console.log(this === exports) //true, this aponta para o objeto exports

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)// é false ele não aponta para o objeto export dentro de uma função
    console.log(this === global)//true, dentro de uma função this aponta para global. Então tem que cuidar
    //ao colocar uma variável com this dentro de uma função, pois ela ficará exposta no escopo global
    //ex.:
    this.a = 1
}
logThis()
//ao colocar uma varivel com this dentro de uma função, ela ficará exposta no escopo global.


//Neste caso, o certo
//é definir ela fora, pra ficar exposta só através do módulo
this.b =2 
console.log(global.b)//undefined

