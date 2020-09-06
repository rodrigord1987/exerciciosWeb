//IIFE -> Immediately Invoked Function Expression
//É uma função alto invocada no momento que ela é declarada. Serve justamente
//para inicializar variáveis, ou criar funções que deve ser executada como before tela...
//tudo que é informado nessa função, não é mapeado ou afetado no escopo global. Ficando tudo local.

(function(){
    console.log('Será executado na hora.')
    console.log('Foge do escopo mais abrangente.')
})()
