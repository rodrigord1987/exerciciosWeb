const alunos = ['rodrigo','bruna','lorena','theo']
console.log(alunos)

// método pop exclui o ultimo elemento do array
alunos.pop()
console.log(alunos)

//método push adiciona um elemento na ultima posição do array
alunos.push('theo')
console.log(alunos)

//método shift remove o primeiro elemento do array
alunos.shift()
console.log(alunos)

//método unshift adiciona um elemento na primeira posição do array
alunos.unshift('rodrigo')
console.log(alunos)

//método splice permite excluir e adicionar elementos no array
const aprovados = ['Bia', 'Carlos','Ana']
console.log(aprovados)
//primeiro parametro é a partir de qual elemento. o segundo quantos devem ser excluidos
aprovados.splice(1,1)
console.log(aprovados)
//O segundo parametro está zero, significa que não é para excluir. a partir do terceiro parametro está incluindo 
//novos elementos no array a partir do indice 1(primeiro parametro)
aprovados.splice(1,0,'RODRIGO','BRUNA','lorena')
console.log(aprovados)


//método slice cria um novo array a partir do array passado como parametro
console.log("alunos:",alunos)
const algunsAlunos = alunos.slice(2) //cria um novo array a partir do segundo elemento do array alunos
console.log("algunsAlunos: "+algunsAlunos)
//cria um segundo array a partir do segundo elemento até o elemento -1 que queremos
console.log("alunos:",alunos)
const algunsAlunos2 = alunos.slice(0,2)
console.log("algunsAlunos2: ",algunsAlunos2)