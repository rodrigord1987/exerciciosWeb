// node faz cache dos módulos
//um objetvo exportado que não seja factory, sempre terá seus dados alterados, fazendo com quem o use pode estar sendo impactado
module.exports = {
    valor: 1,
    incrementa(){
        this.valor++
    }
}