//procedural - funções onde recebe parametros para realizar o seu processamento
processamento(valor1,valor2,valor3)


//OO trabalha com o os dados e comportamentos
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        //...
    }
}

objeto.processamento()//foco passou a ser o objeto onde contém seus atributos e seus métodos.

//principios importantes:
//abstração: trazer algo do mundo real e abstrair para o software o que vc precisa
//encapsulamento: Fazer com o objeto não tenha dependência de outros objetos, afim de deixar o código mais fácil para manutenção
// e gerar menos impacto nos outros objetos que usam ele.
//herança: Ter objeto pai/filho, onde cada objeto vai herdando caracteristica de outro objeto.
//polimorfismo: Significa multiplas formas, onde a partir de um objeto genérico, eu consigo "substituir" por objetos concretos.