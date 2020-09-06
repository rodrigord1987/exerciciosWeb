//exercicio para trazer a mulher chinesa com menor salário
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
//console.log(axios)

const chineses = f => f.pais ==='China'
const mulheres = f => f.genero ==='F'
const menorSalario = (func,funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}
//através do axios.get ele busca os dados da url e retorna o json no response.data
axios.get(url).then(response=> {
    const funcionarios = response.data
    //console.log(funcionarios) //tem duas variaveis pra ver o conteudo do antes de do depois
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})


