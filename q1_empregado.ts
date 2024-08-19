class Empregado {
    salario: number = 500

    calcularSalario(): number {
        return this.salario
    }
}

class Diarista extends Empregado {
    calcularSalario(): number {
        // Chama o método calcularSalario() da classe Empregado e divide o resultado por 30.
        return super.calcularSalario() / 30
    }
}
class Horista extends Diarista {
    calcularSalario(): number {
        // Chama o método calcularSalario() da classe Diarista e divide o resultado por 24.
        return super.calcularSalario() / 24
    }
}

// Testando minhas classes e suas instâncias
const empregado = new Empregado()
console.log(empregado.calcularSalario())

const diarista = new Diarista()
console.log(diarista.calcularSalario())

const horista = new Horista()
console.log(horista.calcularSalario())





    