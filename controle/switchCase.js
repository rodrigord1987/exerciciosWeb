const imprimirSituacao = function(nota){
    switch(Math.floor(nota)){
        case 10://como no case 10 eu não coloquei break, então ele irá executar o case 9.
               //como ambos os cases, possui o mesmo retorno de resultado, então assim não duplica a sentença
        case 9:
            console.log('se for 10 ou 9 irá imprimir aqui')
            break//colocar break para que ele saia do switch
        case 7: case 8: 
            console.log('aprovado. 7 ou 8')
            break
        case 6: case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('reprovado')
            break
        default:
            console.log('nota incorreta')
            break
    }
}

imprimirSituacao(11)
imprimirSituacao(10)
imprimirSituacao(8)
imprimirSituacao(5)