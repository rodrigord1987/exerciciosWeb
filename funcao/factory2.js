//Função Factory para criação de um objeto
//Função Factory, significa, função responsável por criar objeto.
//exemplo prático, é vc precisar dos atributos várias vezes, então vc cria 
// uma função factory e usa o retorno dela para retornar pra vc o obejto que precisa.
//passei um terceiro parametro com default. Caso não enviar, ele asume este.
function criarProduto(a,b,c=0.1){
    return {
        nome: a,
        preco: b,
        desconto: c
    }
}

console.log(criarProduto('bike',5000))
console.log(criarProduto('camisa',49.90))
console.log(criarProduto('bermuda',69.90,0.5))

const item1 = criarProduto('controle',30,0)
console.log(item1)

let produto = 'tesoura'
let preco = 25
let desconto = 0.6

const item2 = criarProduto(produto,preco,desconto)
console.log(item2)



