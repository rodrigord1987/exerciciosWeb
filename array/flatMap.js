//flatMap, não está disponível na API do JS, mas ele serve pra unir dados de arrays distintos em um só
//então ele é o map + o concat
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const escola =[{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Rodrigo',
        nota: 9.9
    },
    {
        nome: 'Bruna',
        nota: 9.8
    }]
},
{
    nome: 'Turma M1',
    alunos:[{
        nome: 'Rodrigo',
        nota: 9.9
    },
    {
        nome: 'Bruna',
        nota: 9.8
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

//exemplo com map
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

//exemplo com flatMap
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)