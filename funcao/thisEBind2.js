//posso utilizar o bind ou fazer o desvio utilizando a variável const self antes da função anonima
function Pessoa(){
    this.idade = 0

    const self = this //passando o this para uma variavel, para poder usar dentro do contexto da função setInterval
    setInterval(function(){ //comando setInterval executa a cada tempo conforme parametro o valor informado.
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa //criando um objeto Pessoa para a função Pessoa.