class Pessoa {
    private _nome: string
    private _sobrenome: string

    constructor(nome: string, sobrenome: string) {
        this._nome = nome
        this._sobrenome = sobrenome
    }

    get nome() {
        return this._nome
    }

    get sobrenome() {
        return this._sobrenome
    }

    get nomeCompleto() {
        return `${this._nome} ${this._sobrenome}`
    }
}

class Funcionario extends Pessoa {
    private _matricula: string
    private _salario: number

    constructor(nome: string, sobrenome: string, matricula: string, salario: number) {
        super(nome, sobrenome)
        this._matricula = matricula
        this._salario = salario  // Usa o setter para garantir que o salário não seja negativo.
    }

// Getter para o atributo _matricula
    get matricula(): string {
        return this._matricula
    }

// Getter e Setter para o atributo _salario
    get salario(): number {
        return this._salario
    }

    set salario(valor: number) {
        if (valor < 0) {
            throw new Error("O salário não pode ser negativo.")
        }
        this._salario = valor
    }

// Agora irei fazer um método que retorna 60% do salário
    calcularSalarioPrimeiraParcela(): number {
        return (this._salario * 0.6) + this._salario
    }

// E agora, eu irei fazer um método que retorna 40% do salário
    calcularSalarioSegundaParcela(): number {
        return (this._salario * 0.4) + this._salario
    }
}

// Exemplos de uso
const funcionario : Funcionario = new Funcionario("Vinícius", "Gomes", "876513", 6000)

console.log(funcionario.nomeCompleto)
console.log(funcionario.matricula)
console.log(funcionario.salario)
console.log(funcionario.calcularSalarioPrimeiraParcela())
console.log(funcionario.calcularSalarioSegundaParcela())

// Fim da 3ª questão.



