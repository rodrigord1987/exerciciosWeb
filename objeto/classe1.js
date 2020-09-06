//construtor sempre é executado quando a classe é instanciada
// e os this dentro dele é pra dizer a classe que esses atributos estão disponíveis
class Lancamento {
    constructor(nome = 'Genérico', valor = 0){ 
        this.nome = nome
        this.valor = valor
    }
}

class ClicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){ //poderá receber vários parametros geralmente um array
        lancamentos.forEach(Indice => this.lancamentos.push(Indice)) //percorre cada elemento do parametro lancamento adicionando no array lancamentos
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(Indice => {//função arrow, percorre cada elemento do array para fazer a conta.
            valorConsolidado += Indice.valor
        })
        return valorConsolidado //retorna o valor que sobrou.
    }

}

const salario = new Lancamento('Salario',90000) //cria uma variável e instancia a classe passando os parametros do construtor
const contaDeLuz = new Lancamento('Luz', -300)

const contas = new ClicloFinanceiro(5,2019)
contas.addLancamentos(salario,contaDeLuz)

console.log(contas.sumario())
