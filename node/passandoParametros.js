//criando uma função para receber ou não uma lista de nomes que será retornado na string.
module.exports = function(...nomes){
    return nomes.map(nomes => `Boa semana ${nomes}!`)
}