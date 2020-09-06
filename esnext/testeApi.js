//trabalhando de uma forma mais sincrona
const http = require('http')

const getMoeda = internalId => {
    //const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    const url = `http://localhost:8080/api/fin/v1/currency/${internalId}`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
               try {
                   resolve(JSON.parse(resultado))
               } catch(e){
                    reject(e)
               }
            })
        })
    })
}

//recurso do ES8
// Objetivo de simplificar o uso de promises
let obterMoeda = async () => {
    const moeda = await getMoeda(1)
    return moeda // retorna um objeto AsyncFunction
}

obterMoeda()
    .then(resultado => {
        let moeda = resultado
        console.log(moeda)
        console.log(`Código da Moeda: ${moeda.Code} / Descrição da Moeda: ${moeda.Description} / Simbolo da Moeda: ${moeda.Symbol}`)
    })    
    