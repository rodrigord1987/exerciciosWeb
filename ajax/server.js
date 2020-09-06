const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))//servindo as páginas estáticas do meu projeto
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//app.get('/teste',(req, res)=> res.send('OK'))
app.listen(9090,() => console.log('Executando...'))