
//possuo um array
const fabricantes = ["Mercedes","BMW","Audi"]

//tenho uma função que recebe dois parametros
//imprime um template string 
function imprimir(nome, indice){
    console.log(`${indice+1}.${nome}`)
}

//chama a função imprimir para cada valor que possuo no meu array
//na função de array, eu posso o forEach, que faz a busca automatica por cada item do meu array, 
//permitindo retornar o indice e o valor
//isso aqui é o callback, pois a cada valor encontrado no array, ele chama a função imprimir
//e o callback faz isso, sempre que disparar algum evento, aciona tal função.
//Ex.: quando fazer uma requisição ajax para o servidor. Fica trabalhando de forma assincrona, e quando receber
//o retorno, então executa tal função, seja uma função para quando retornar true, ou uma função para quando retornar false.
fabricantes.forEach(imprimir)

//se eu quiser que retorne só o nome, então eu passo só o primeiro parametro
//usando uma função normal
fabricantes.forEach(function(nomeFabricante){
    console.log(nomeFabricante)
})
//usando função arrow retornando só o nome do fabricante
fabricantes.forEach(nomeFabricante => console.log(nomeFabricante))

//usando função arrow indice e nome do fabricante
fabricantes.forEach((nome,indice) => console.log(indice+'.',nome))

