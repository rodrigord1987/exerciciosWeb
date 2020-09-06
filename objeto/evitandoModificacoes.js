// Object.preventExtensions 
// método responsável por não permitir adicionar novos atributos no objeto
const produto = Object.preventExtensions({
    nome: 'Computador',
    preco: 1000,
    tag: 'promocao'
})
console.log('Extensível?', Object.isExtensible(produto)) //método pra saber se é ou não extensível

produto.nome = 'Borracha' //consigo alterar o valor do atributo
produto.descricao = 'Borracha escolar Branca' //não consigo add um novo atributo
delete produto.tag //consigo excluir um atributo do objeto
console.log(produto)

//Object Seal 
//Método responsável por selar o objeto, não permitindo excluir um atributo do objeto
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado? ', Object.isSealed(pessoa))//método pra saber se está selado o objeto

pessoa.sobrenome = 'Silva' //não consigo adicionar um novo atributo
delete pessoa.nome //não consigo excluir
pessoa.idade = 29 //consigo alterar
console.log(pessoa) 


//Object.freeze 
//Este método é a junção do selado (Object.seal) + valores constante, ou seja, não permite add/excluir e nem alterar valores.