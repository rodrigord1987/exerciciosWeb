const func = []
//declaração da variável utilizando let, guarda corretamente o valor i no array
//neste exemplo temos um for, dentro dele estamos inserindo o valor de i no array em cada posição 
//e aproveitamos para fazer uma função anonimca. 
//No fim estamos chamando a função array func passando a posição do array que queremos imprimir
for(let i = 10; i<20; i++){
    func.push(function(){
        console.log(i)
    })
}
func[1]() //como  array tem uma função anonima, tem que passar ()

//se fosse utilizar var no lugar de let, o var iria retornar o ultimo valor atribuido na variável. O que geraria confusão.