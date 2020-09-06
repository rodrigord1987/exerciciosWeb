const produto1 = {}
produto1.nome ='Celular'
produto1.marca ='Xiaomi'
produto1.modelo ='MI 8 lite 128gb'

console.log(produto1) //printa todo o objeto

const produto2 = {
    nome: 'Celular',
    marca: "Xiaomi",
    modelo: "MI 8 lite 128gb",
    preco:  2.000
}
console.log(produto2.preco)//printa só o atribudo preco do objeto produto2

//quando atribui um valor para um objeto, não está de fato atribuindo o valor e sim a referencia, o endereço de onde esta o valor.
//Neste caso, se alterar o valor desse objeto, quem apontar para esse objeto irá notar a mudança.