//Função Factory, significa, função responsável por criar objeto.
//exemplo prático, é vc precisar dos atributos várias vezes, então vc cria 
// uma função factory e usa o retorno dela para retornar pra vc o obejto que precisa.
function criarPessoa(){
    return {
        nome: 'Rodrigo',
        sobrenome: 'Dos Reis'
    }
}

console.log(criarPessoa())