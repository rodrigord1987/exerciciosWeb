//array é uma função, e o tipo do array é um objeto
console.log(typeof Array, typeof new Array, typeof [])

//exemplo criando um array através de new array
let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

//exemplo criando um array da forma literal
aprovados = ['Bia', 'Carlos','Ana']
console.log(aprovados)
//indice no array começa a partir do 0 (zero)
console.log(aprovados[0])

//adicionando elementos no array
console.log(aprovados.length)
aprovados[3]='Rodrigo'
aprovados[4]='Bruna'
console.log(aprovados.length)
aprovados.push('Lorena')
console.log(aprovados)
console.log(aprovados.length)
aprovados[9]='João'
console.log(aprovados)
console.log(aprovados[8]===undefined)

//reordenando os elementos dentro do array
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

//excluindo um elemento do array
delete aprovados[1]
console.log(aprovados[1])

//método splice permite excluir e adicionar elementos no array
aprovados = ['Bia', 'Carlos','Ana']
console.log(aprovados)
//primeiro parametro é a partir de qual elemento. o segundo quantos devem ser excluidos
aprovados.splice(1,1)
console.log(aprovados)
//O segundo parametro está zero, significa que não é para excluir. a partir do terceiro parametro está incluindo 
//novos elementos no array a partir do indice 1(primeiro parametro)
aprovados.splice(1,0,'RODRIGO','BRUNA','lorena')
console.log(aprovados)
