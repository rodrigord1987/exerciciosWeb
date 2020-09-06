const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true})) //pra jogar os dados no body da requisição

app.post('/usuarios',(requisicao,resposta)=>{
    console.log('usuário incluido')
    resposta.send(requisicao.body)
})

app.post('/usuarios/:id',(requisicao,resposta)=>{
    console.log('usuário alterado')
    resposta.send(requisicao.body)
})
app.listen(3003)