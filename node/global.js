//O node possui um modulo interno chamado escopo global, dentro dele possui varios objetos.
//cuidar pra não mexer coisas no global que possam impactar o resto do projeto.
//algo interessante é criar um objeto no global com o nome da aplicação, dados genéricos
//e colocar isso como imutável(não permitir alterar) utilizando o freezer

//console.log(global)
global.minhaAplicação = Object.freeze({
    saudacao(){
        return 'Olá vc está na minha aplicação.'
    },
    nomeAplicacao: 'MeuApp'
})