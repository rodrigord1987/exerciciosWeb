function soNoticiaBoa(nota){
    if(nota>=7){
        console.log('Aprovado com',nota)
    }
}

soNoticiaBoa(7)
soNoticiaBoa(Math.ceil(6))//método para arredondar para cima

//o mesmo exemplo acima, porém utilizando função arrow
let noticiaBoa = nota1 => nota1 >=7 ? console.log('Aprovado') : console.log('reprovado função arrow')
noticiaBoa(7)

//testando o que é falso e o que é verdadeiro.
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade esse bilhete...',valor)
    }
}
seForVerdadeEuFalo()//não passar nada para a função que recebe algo, é falso
seForVerdadeEuFalo(null)//se passar null é falso
seForVerdadeEuFalo(undefined)//se passar undefined é falso
seForVerdadeEuFalo(NaN)//se passar NaN é falso
seForVerdadeEuFalo('')//se passar '' é falso
seForVerdadeEuFalo(0)//se passar 0 é falso
seForVerdadeEuFalo(-1)//se passar qualquer numero <>0 é true
seForVerdadeEuFalo(' ')//se passar um caracter em branco, é true
seForVerdadeEuFalo([])//se passar um array vazio é true
seForVerdadeEuFalo({})//se passar um objeto vazio é true
seForVerdadeEuFalo([1,2])//se passar um array com posição é true
seForVerdadeEuFalo('qualquer outro valor')//se passar uma string é true


//testando se o valor é um number, pra testar corretamente, pq a linguagem é fracamente tipada
//então qualquer string não conseguirá comparar com nota>=7
const imprimirResultado = function(nota){
    if(typeof(nota)!= 'number'){
        throw('Ops, valor incorreto')
    }
    if(nota>=7){
        console.log('Aluno aprovado. Parabéns!!!')
    } else {
        console.log('Aluno reprovado. Que triste!!!')
    }
}

imprimirResultado(7)
//imprimirResultado('epa')

//usando o this para number
Number.prototype.entre= function(inicio,fim){
    return this >= inicio && this <= fim
}
//a partir da função criada a cima, eu consigo ver se o valor nota está entre as condições
const situacaoAluno = function(nota){
    if (nota.entre(9,10)){
        console.log('Honra ao mérito')
    } else if(nota.entre(7,8.9)){
        console.log('Passou de ano')
    } else if(nota.entre(5,6.9)){
        console.log('Em recuperação')
    }else if(nota.entre(0,4.9)){
        console.log('reprovado')
    }else{
        console.log('nota inválida')
    }
}
situacaoAluno(9.7)
situacaoAluno(8)
situacaoAluno(6.8)
situacaoAluno(0)
situacaoAluno(-1)
situacaoAluno(11)
