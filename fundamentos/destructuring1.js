//Novo recurso do ES6
//consigo transformar um atributo de um objeto e variável

const pessoa = {
    nome: "Rodrigo dos Reis",
    idade: 31,
    endereco : {
        rua: "Henrique Miers",
        numero: 301
    }
}
//dentro de {} coloco qual atributo quero que seja uma variável, e = pessoa de qual objeto
const {nome,idade} = pessoa
console.log("valor variaveis nome e idade:",nome,idade)

//caso eu queria dar um novo diferente para a variável, então eu posso fazer assim:
const {idade: i}=pessoa
console.log("valor variavel i:", i)

const {idade: d, nome: n}=pessoa
console.log("valor variaveis d n:", i,n)

//caso eu queira acessar um atributo de um atributo. Neste caso atribui para a variável "r" a rua do atributo endereço.
const {endereco: {rua: r}}= pessoa
console.log("valor variavel r:",r)

//posso tbm atribui um valor default para uma variável caso ela não seja um atributo do meu objeto
const {sobrenome: sNome = "Não informado"} = pessoa
console.log("variável sNome sem atributo:",sNome)

//se o atributo sobrenome estivesse no objeto pessoa, a variavel s terá o valor que foi definido no objeto.
pessoa.sobrenome="Teste"
const {sobrenome: s = "Não informado"} = pessoa
console.log("variável s com atributo sobrenome definido no objeto:",s)