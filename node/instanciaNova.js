//Uma factory retorna sempre um novo objeto. Dessa forma, vc utiliza o objeto sempre novo, com alteração dos dados
// sem impactar ninguém
module.exports = () => {
    return{
        valor: 1,
        incrementa(){
            this.valor++
        }
    }
}