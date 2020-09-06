//contexto lexico, define em que momento a função irá considerar o valor de alguma variável.
//neste exemplo, por mais que eu tenho uma const valor dentro da função exec() a função minhaFuncao está no contexto global
//enxergando os valores do arquivo contextoLexico.js e não o valor da variável valor da função exec.
//então por mais que eu execute a função exec() quando ela executar a funçao minhaFuncao, essa irá entender que o valor
//é global.
const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()