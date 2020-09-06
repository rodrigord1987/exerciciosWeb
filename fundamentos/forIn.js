//percorrer um objeto
const pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'dos Reis',
    idade: 31,
    peso: 76
}
//a partir de um objeto, consigo buscar os atributos e valores desse objeto
for( i in pessoa ){
    console.log(`${i}= ${pessoa[i]}`) //utilizando template string, onde concateno o atributo(pegando o nome do atributo) e o valor do atributo
}

console.log('nome=',pessoa[i])//que ao contrato do template string, é o mesmo que fazer dessa forma só que fixo o nome do atributo