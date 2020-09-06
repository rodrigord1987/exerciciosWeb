const aprovados = ['rodrigo', 'bruna', 'lorena']

//função callback passando para o foreach do array que para cada elemento do array, retornar o nome, indice e o array pra 
//ela printar no console. os parametros passado na função callback são opcionais, mas a ordem é essa.
aprovados.forEach(function(nome,indice,array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(indice)
    console.log(array)
})
//função arrow function passando o elemento
aprovados.forEach(nome=> console.log(nome))

//execuntando a função a partir de uma variável.
const exibirAprovados = aprovados=> console.log(aprovados)
aprovados.forEach(exibirAprovados)