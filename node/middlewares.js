//middleware pattern (padrão de projeto chain of responsability)
//padrão de projeto responsável por deixar cada função responsável pela sua parte.

const passo1 = (contexto, next)=> {
    contexto.valor1 = 'mid1'
    next()//função reservada para ser invocada quando precisar chamar outra função encadeada
}

const passo2 = (contexto, next)=> {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = contexto => contexto.valor3 = 'mid3' //essa função não irá chamar outra função.

const exec = (contexto, ...middlewares)=>{
    const executandoPasso = indice => {
        middlewares && indice < middlewares.length && 
        middlewares[indice](contexto,()=> executandoPasso(indice + 1))
    }
    executandoPasso(0)
}

const contexto = {} //criando a variável contexto que é um objeto e será usada para pegar os atributos de cada função
exec(contexto, passo1,passo2,passo3)
console.log(contexto)