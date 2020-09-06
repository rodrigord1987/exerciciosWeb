const fs = require('fs')//modulo file System do node. Para leitura e manipulação de arquivos e pastas
const caminho = __dirname + '/arquivo.json'//para buscar diretório

//exemplo sincrono não muito recomendado, pq trava o eventLoop aguardando o fim da execução para prosseguir.
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)

//assincrono
//(err,conteudo): função callback que ao encontrar o conteudo irá retornar o conteudo ou a mensagem de erro em err
fs.readFile(caminho, 'utf-8', (err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//tbm é possível pegar o arquivo direto. Dessa forma ele já vem no formado de objeto, não precisando fazer o parse
const config = require('./arquivo.json')
console.log(config.db)

//pesquisa os arquivos de uma pasta
//(err,arquivos): função callback que ao encontrar os arquivos irá retornar o arquivos ou a mensagem de erro em err
fs.readdir(__dirname, (err,arquivos)=>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
