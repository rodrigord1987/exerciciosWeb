/* //pra buscar módulos terceiros
const _ =require('lodash')
setInterval(()=> console.log(_.random(1,200)),2000)

//para ter um servidor rodando, baixar globalmente o nodemon


//acessando um módulo do lodash, requisição http
const http = require('http')
http.createServer((req,res)=>{
    res.write('Oi, tudo bem?')
    res.end()
}).listen(8080)
 */
const upperCase = require('../node_modules/lodash/upperCase')
console.log(upperCase)
console.log(upperCase('tente de novo'))