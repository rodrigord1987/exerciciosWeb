class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "professor"){
        super(sobrenome) //super serve par herdar o constructor do objeto pai
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(anos){
        super('silva')
        this.anos = anos
    }
}

const filho = new Filho(32)
console.log(filho)
console.log(filho.profissao)
console.log(filho.sobrenome)
