class Pessoa {
    private _nome: string
    private _sobrenome: string

    constructor(nome: string, sobrenome: string) {
        this._nome = nome
        this._sobrenome = sobrenome
    }

    get nome(): string {
        return this._nome
    }

    get sobrenome(): string {
        return this._sobrenome
    }

    get nomeCompleto(): string {
        return this._nome + ' ' + this._sobrenome
    }
}

// Testando minha classe Pessoa e meus métodos para exemplos de uso
const pessoa = new Pessoa("Vinícius", "Gomes")
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.nomeCompleto)



