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

class Professor extends Funcionario {
    private _titulacao: string

    constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string) {
        super(nome, sobrenome, matricula, salario)
        this._titulacao = titulacao  // usa-se o método setter para leitura
    }

// Agora irei atribuir o método Getter para o atributo _titulacao
    get titulacao(): string {
        return this._titulacao
    }

/* Agora faremos a sobrescrita do método calcularSalarioPrimeiraParcela para retornar
100% do salário. */
    calcularSalarioPrimeiraParcela(): number {
        return this.salario
    }

// Agora faremos a sobrescrita do método calcularSalarioSegundaParcela para retornar 0
    calcularSalarioSegundaParcela(): number {
        return 0
    }
}

class FolhaDePagamento {
    private pessoas: Pessoa[]

    constructor(pessoas: Pessoa[]) {
        this.pessoas = pessoas
    }

    calcularPagamentos(): number {
        let total = 0

            for (const pessoa of this.pessoas) {
                if (pessoa instanceof Funcionario) {
                    total = total + pessoa.salario
                }
            }

    return total
    }
}

// Exemplos de uso para FolhaDePagamento
const pessoa1 = new Funcionario("Ana", "Silva", "123479", 6500)
const pessoa2 = new Professor("Carlos", "Oliveira", "122191", 8100, "Mestrado")
const pessoa3 = new Pessoa("João", "Pereira")

const folha = new FolhaDePagamento([pessoa1, pessoa2, pessoa3])
console.log(folha.calcularPagamentos())

// Fim da 5ª questão.

