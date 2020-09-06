//recurso do ES6
//possuo uma função que retorna um numero randomico, e ela recebe
//como parametro duas variaveis destruturada do objeto obj.
function rand({min=0, max=100}){
    const valor = Math.random() * (maximo - minino) + minino //forma de calcular um valor randomico
    return Math.floor(valor)//floor - arredondando para baixo.
}

const obj = {min:2,max:500} //meu objeto
console.log(rand(obj)) //chamando a funão passando o objeto
console.log(rand({min:97})) //chamando a função passando um atributo do objeto apenas. o max será utilizado o dafault
console.log(rand({})) //chamando a função passando nenhum atributo do objeto. Dessa forma assumi o valor default definido na função