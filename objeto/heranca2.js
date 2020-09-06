//Cadeia de protótipos (prototype chain) - herança
Object.prototype.atributo0 = 0 //colocando um atributo no prototype global. Não recomendado. Este é como se fosse
//um p_cod_empresa, onde todos os objetos vão enxergar esse atributo, pois ele está no nível mais alto da herança.
const avo = {atributo1: 'A'}
const pai = {atributo2: 'B', atributo3: 'C', __proto__: avo}//referenciando atributo avo para que seja herança do objeto pai
const filho = {atributo4: 'D', __proto__: pai}

console.log(filho.atributo4, filho.atributo3, pai.atributo1,avo.atributo0)//perceba que os atributos dos objetos herdados, se referenciam.

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h` 
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`//a palavra reservada super é pra acessar o método do nível a cima que contém o mesmo nome.
                                                  //no caso a função status do objeto carro
    }
}

Object.setPrototypeOf(ferrari, carro)//é outra forma de referenciar a herança. No caso estou dizendo que ferrari herda as caracteristica de carro
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log( volvo.status())//aqui está assumindo o método status que está no objeto volvo, e dentro do volvo ele usa o super para buscar o status do objeto carro.

ferrari.acelerarMais(300)
console.log(ferrari.status())// aqui o atributo velMax está buscando do objeto ferrari e não do carro, visto que quem está invocando o método é o objeto ferrari e não carro.

ferrari.acelerarMais(400)
console.log(ferrari.status())//a velocidade maxima barrou o acelarMais(400) por conta da lógica no método do objeto carro.