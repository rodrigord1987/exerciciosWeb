const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// prototype é um objeto acima do objeto criado.
//então caso eu queria acessar um atributo de um objeto, ele vai procurar no objeto que estou
//se não achar, vai procurar no objeto superior a esse, no caso o Pai(herança)
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto) //ambos são funções
console.log(Object.prototype, MeuObjeto.prototype) //prototype do objeto é um objeto

//Duas formas de "setar" as heranças do objeto pai para o objeto filho
Object.setPrototypeOf(ferrari, carro) // aqui diz que o objeto ferrari herda o objeto carro (pai)
const filho = {
        __proto__: carro, //dentro do objeto definido, criar um atributo "__proto__:" com o valor do objeto "PAI" que deseja herdar
        atributo2: 'a',
        atributo3: 'b'
    }
