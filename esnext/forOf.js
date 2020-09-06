//o for of, pega o valor ao invés do indice, ou seja, ao contrario do for in
for (let letra of 'Rodrigo'){
    console.log(letra)
}

//exemplo de um for in
const assuntosEcma = ['Map','Set','Promisse']
for (let i in assuntosEcma){
    console.log(i)
    console.log(assuntosEcma[i])
}

//exemplos de um for of a partir de um array. Não preciso passar o indice
for (let assunto of assuntosEcma){
    console.log(assunto)
}

//exemplo utilizando o Map
const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promisse', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}
for (let assunto of assuntosMap.keys()){ //buscando a chave
    console.log(assunto)
}
for (let assunto of assuntosMap.values()){ //buscando o valor
    console.log(assunto)
}
for (let [chave,valor] of assuntosMap.entries()){ //buscando as entradas
    console.log(chave,valor)
}

const s = new Set(['a','b','c'])
for (let letra of s){
    console.log(letra)
}
