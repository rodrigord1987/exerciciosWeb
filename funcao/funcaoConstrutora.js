//função construtora, em termos de O.O. podemos nos referir como uma classe onde possui seus atributos(funções)
//privados e públicos
function Carro(velocidadeMaxima = 200, acelerar = 5){
    //atributo privado, ou seja, não é permitido alterar fora dessa função essa variável
    //serve justamente pra que não seja permitido burlar o seu valor
    //se torna privado pois está sendo declarada utiliando let (ou const) dentro da função carro
    let velocidadeAtual = 0

    //atributo público, ou seja, permite chamar essa função para executar a alteração da velocidade, de uma forma organizada
    //se torna público pela palavra reservada this
    this.acelerar = function(){
        if (velocidadeAtual + acelerar <= velocidadeMaxima) {
            velocidadeAtual += acelerar
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //atriburo público, ou seja, permite chamar essa função para retornar a velocidade atual
    //se torna público pela palavra reservada this
    this.getVelocidadeAtual = () => velocidadeAtual
}

//crio uma variável constante do objeto carro e não passo nenhum valor de parametro, assim está considerando o default 200,5
const uno = new Carro
//a partir do objeto, invoco então o atributo publico acelerar.
uno.acelerar()
//invoco o atributo getVelocidadeAtual() para retornar a velocidade atual
console.log(uno.getVelocidadeAtual())

//aqui crio uma const do objeto carro, passando como prametro a velocidade máxima e quanto deve acelerar
const ferrari = new Carro(350,50)
//acelero duas vezes para somar o quanto deve acelerar
ferrari.acelerar()
ferrari.acelerar()
//imprimo o valor da aceleração da const ferrari do objeto carro
console.log(ferrari.getVelocidadeAtual())