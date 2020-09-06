//como interagir via prompt de comando, por exemplo...
const anonimo = process.argv.indexOf('-a') !== - 1 //buscar na string o parameto '-a'
console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo. \n') //vai printar isso no console.
    process.exit()//pra terminar a execução
} else {
    process.stdout.write('Informe o seu nome: ') //para receber dados do teclado
    process.stdin.on('data', data => { //dentro do evento on data vai retornar no data os dados e o enter informando no teclado
        const nome = data.toString().replace('\n','') //pega o nome digitado retirando o enter

        process.stdout.write(`Fala ${nome}.\n`) //imprime o nome digitado
        process.exit() //finaliza o processo
    })
}