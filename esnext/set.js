// é parecido com array, mas não possui indice e não aceita valores repetidos
const times = new Set()
times.add('Palmeiras')//pode add dessa forma
times.add('Vasco').add('Flamengo').add('Gremio')//pode add dessa forma.. encadeados
times.add('Palmeiras')//não irá aceitar repetição

console.log(times)
console.log(times.size)
console.log(times.has('palmeiras'))//método para pesquisa da palavra se encontra ou não
console.log(times.has('Palmeiras'))//método para pesquisa da palavra se encontra ou não
times.delete('Flamengo')
console.log(times.size)

const nomes = ['Raquel', 'João', 'Julia','João'] //array com valor repetido
const nomeSet = new Set(nomes)
console.log(nomeSet)// desconsidera o valor repedido João
