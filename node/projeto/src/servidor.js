//arquivo para configuração do servidor.

const porta = 3003

const express = require('express')
const app = express() 
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))//pré requisito para fazer o parser do json para objeto no put e post

//a partir do método app, temos os verbos
//neste caso, passando get, e um nível produtos para passar na url localhost:3003/produtos (testar no postman)
//tbm possui uma função callback para ficar ouvindo, quando bater na função ela retorna a resposta com o 
//objeto sendo já alterado pelo método send para formato JSON
/* app.get('/produtos', (requisicao, resposta, next)=>{
    resposta.send({ nome: 'Notebook', preco: 123.33})
}) */
// exemplo para o verbo post
//instalar uma dependencia para tratar o json que veio no body para objeto: npm i --save body-parser
/* app.post('/produtos', (requisicao, resposta, next)=>{
    resposta.send({ status: 200, nome: 'Notebook', preco: 123.33})
}) */

//get all
app.get('/produtos', (requisicao, resposta, next)=>{
    resposta.send(bancoDeDados.getProdutos())
})

//get one
app.get('/produtos/:id', (requisicao, resposta, next)=>{
    resposta.send(bancoDeDados.getProduto(requisicao.params.id))
})

//post
app.post('/produtos', (requisicao, resposta, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })
    resposta.send(produto)
})

//put
app.put('/produtos/:id', (requisicao, resposta, next)=>{
    const produto = bancoDeDados.salvarProduto({
        id: requisicao.params.id,
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })
    resposta.send(produto)
})

//delete
app.delete('/produtos/:id', (requisicao, resposta, next)=>{
    const produto = bancoDeDados.excluirProdutos(requisicao.params.id)
    resposta.send(produto)
})

//listando a porta para deixar disponível para acesso
app.listen(porta, ()=>{
    console.log(`Servidor está executando na porta ${porta}.`)
})