const pessoa= {
    nome: "Rodrigo",
    idade: 31,
    peso: 74
}
console.log(Object.keys(pessoa))//retorna só as chaves do objeto pessoa
console.log(Object.values(pessoa))//retorna só os valores do objeto pessoa
console.log(pessoa.nome.length)//retorna o tamanho do atributo da propriedade nome do objeto pessoa

Object.entries(pessoa).forEach(([chave, valor]) => { //destructurando os dados
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
  enumerable: true, //permite numerar/visualizar ele
  writable: false, //permite ou não alterar o seu valor
  value: '01/01/2019' //valor default ao criar uma nova propriedade  
})

pessoa.dataNascimento = '01/02/2019' //se writable = false, então o valor default é congelado e não permitido alterar
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))//se enumerable=false, então não seria possível visualizar a propriedade dataNascimento aqui

//Object.assign (ECMAScript 2015)
const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(destino, o1, o2)//atribui os objetos a partir do segundo parametro no primeiro passado, neste caso no destino
console.log(destino)

Object.freeze(obj)//esse método tem a finalidade de congelar o objeto, para não permití-lo altera-lo
obj.c = 1234
console.log(obj)//com o freeze executado, o atributo de obj.c não foi alterado.