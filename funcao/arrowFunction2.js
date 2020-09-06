//Quanto utilizo função arrow ele enxerga o this da função Pessoa(). Dessa forma não preciso trabalhar como o ex. thisEBind2.js
function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa //criando um objeto Pessoa para a função Pessoa.