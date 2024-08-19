var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "sobrenome", {
        get: function () {
            return this._sobrenome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "nomeCompleto", {
        get: function () {
            return this._nome + ' ' + this._sobrenome;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
// Testando minha classe Pessoa e meus métodos para exemplos de uso
var pessoa = new Pessoa("Vinícius", "Gomes");
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.nomeCompleto);
