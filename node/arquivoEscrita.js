const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1299.99,
    desconto: 0.15
}

//está criando um arquivo e salvando no diretório. Possui uma função callback com o retorno de erro, que se a caso tiver
//preenchida, será printada no console, se tiver nula, então irá printar a mensagem de sucesso.
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto),erro=>{
    console.log(erro || 'Arquivo gerado com sucesso')
})