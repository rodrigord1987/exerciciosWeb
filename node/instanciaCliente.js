//quando a instancia é unica, o valor do objeto exportado é alterado.
//quando a instancia é nova, o valor do objeto original não é alterado, pois a forma que ela foi feita
//foi utilizando função factory, onde a partir de um objeto é criado um novo para ser utilizado.
const instanciaA = require('./instanciaUnica')
const instanciaB = require('./instanciaUnica')

const instanciaC = require('./instanciaNova')() //usando () pq o objeto no módulo é uma função arrow e dentro dela possui um objeto
const instanciaD = require('./instanciaNova')()

instanciaA.incrementa()
instanciaA.incrementa()

instanciaC.incrementa()
instanciaC.incrementa()
console.log(instanciaA.valor,instanciaB.valor)
console.log(instanciaC.valor,instanciaD.valor)