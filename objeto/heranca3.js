const pai ={ nome: 'Rodrigo', corCabelo: 'Preto'}
const filha1 = Object.create(pai)//criando um objeto e passando um objeto "PAI" para herdar as caracteristicas
filha1.nome = 'Lorena'
console.log(filha1.nome)
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {                              //inserindo o objeto que herdou e mais os atributos do objeto filha2
    nome: { value: 'Bia', writable: false,  enumerable: true }
})
filha2.sobrenome = 'dos Reis'

console.log(filha2.nome)
filha2.nome = "Carla" //irá manter "Bia" a propriedade nome no objeto filha 2 foi definito como writable: false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) //manteve como bia.

console.log(Object.keys(filha1)) //possui a chave(atributo) nome herdado do objeto "pai"
console.log(Object.keys(filha2)) //possui a chave(atributo) nome herdado do objeto "pai"

// no exemplo abaixo, percorre o objeto filha2 e retorna as propriedades que pertence ao objeto filha2
// e o que esse objeto herdou do objeto pai
// método "key" referencia as propriedades do objeto. 
//hasOwnProperty retorna as propriedades que possuem no objeto
for ( let key in filha2 ){
    filha2.hasOwnProperty(key) ? 
    console.log(`filha2, Propriedades próprias: ${ key}`) : console.log(`filha2 Por Herança, herdou essas propriedades: ${key}`)
}