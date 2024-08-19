var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            return "".concat(this._nome, " ").concat(this._sobrenome);
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var Funcionario = /** @class */ (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(nome, sobrenome, matricula, salario) {
        var _this = _super.call(this, nome, sobrenome) || this;
        _this._salario = 500;
        _this._matricula = matricula;
        _this._salario = salario; // Usa o setter para garantir que o salário não seja negativo.
        return _this;
    }
    Object.defineProperty(Funcionario.prototype, "matricula", {
        // Getter para o atributo _matricula
        get: function () {
            return this._matricula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        // Getter e Setter para o atributo _salario
        get: function () {
            return this._salario;
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error("O salário não pode ser negativo.");
            }
            this._salario = valor;
        },
        enumerable: false,
        configurable: true
    });
    // Agora irei fazer um método que retorna 60% do salário
    Funcionario.prototype.calcularSalarioPrimeiraParcela = function () {
        return (this._salario * 0.6) + this._salario;
    };
    // E agora, eu irei fazer um método que retorna 40% do salário
    Funcionario.prototype.calcularSalarioSegundaParcela = function () {
        return (this._salario * 0.4) + this._salario;
    };
    return Funcionario;
}(Pessoa));
// Exemplos de uso
var funcionario = new Funcionario("Vinícius", "Gomes", "876513", 6000);
console.log(funcionario.nomeCompleto);
console.log(funcionario.matricula);
console.log(funcionario.salario);
console.log(funcionario.calcularSalarioPrimeiraParcela());
console.log(funcionario.calcularSalarioSegundaParcela());
// Fim da 3ª questão.
