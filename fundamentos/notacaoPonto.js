function Obj(nome){ //tenho uma função onde a palavra this deixa a variável nome publica
    this.nome=nome
    this.exec= function(){
        console.log("Exec...")
    }

}
//nos exemplos abaixo, instancio a função Obj como objeto, e passo pra ela os valores do atributo nome exposto no this
//ao printar o atributo nome dos objetos obj2 e obj3 tenho os valores
const obj2 = new Obj('mesa')
console.log(obj2.nome)
const objt3 = new Obj('cadeira')
console.log(objt3.nome)

//aqui tenho um novo objeto onde dentro dele invoco o atributo exec que este é uma função
const obj3 = new Obj()
obj3.exec()