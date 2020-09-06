// promisse é uma promessa(ela executa algo e no fim retorna se pode ser atendida ou rejeitada). 
//É utilizado para processo assincrono

function falarDepoisDe(segundos, frase){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(frase) //método para resolvido
            //reject(frase)// método para rejeição
        }, segundos * 1000)
    })
}

falarDepoisDe(2,'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(novaFrase => console.log(novaFrase))
    .catch(erro => console.log(erro))//pra usar quando há rejeição reject