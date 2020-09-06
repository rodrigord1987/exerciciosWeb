// operador ... rest(juntar)/ spread(espalhar)
//usar rest com parametro de função(visto na aula revisão2.js)

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12345.99}
const clone = {ativo: true, ...funcionario} //cria um novo objeto com o atributo ativo + o objeto funcionario espalhado
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA,'Rodrigo']
console.log(grupoFinal)