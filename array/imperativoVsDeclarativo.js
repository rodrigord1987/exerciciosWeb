const alunos = [
    {nome: 'João', nota: 8.6},
    {nome: 'José', nota: 4.5},
    {nome: 'Ana', nota: 9.9},
    {nome: 'Maria', nota: 7.1},
]

//codificaçao imperativa, mostra como fazer, é um código unico, sem reaproveitamento
let nota = 0
for(let i = 0; i < alunos.length;i++){
    nota += alunos[i].nota
}
console.log(nota / alunos.length)

//codificação declarativa, mostra o que fazer, código reutilizável, não se preocupa o que as funções internas precisa fazer.
const getnota = aluno => aluno.nota
const soma = (nota,atual) => nota+atual

const total2 = alunos.map(getnota).reduce(soma)
console.log(total2/alunos.length)
