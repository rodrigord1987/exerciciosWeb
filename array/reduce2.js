const alunos =[
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

//1: Todos os alunos são bolsista?
const todosBolsista = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsista))

//2: Algum aluno é bolsista?
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))