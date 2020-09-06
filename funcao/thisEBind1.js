const pessoa = {
    saudacao: 'Bom dia, tudo bem?',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar() //funciona pq está no contexto.

//aqui não funciona pq não consegue encontrar o this de pessoa
const falar = pessoa.falar
falar()

//aqui o bind fixa o this para o objeto pessoa, não perdendo a sua referencia.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
