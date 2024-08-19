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
var Empregado = /** @class */ (function () {
    function Empregado() {
        this.salario = 500;
    }
    Empregado.prototype.calcularSalario = function () {
        return this.salario;
    };
    return Empregado;
}());
var Diarista = /** @class */ (function (_super) {
    __extends(Diarista, _super);
    function Diarista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Diarista.prototype.calcularSalario = function () {
        // Chama o método calcularSalario() da classe Empregado e divide o resultado por 30.
        return _super.prototype.calcularSalario.call(this) / 30;
    };
    return Diarista;
}(Empregado));
var Horista = /** @class */ (function (_super) {
    __extends(Horista, _super);
    function Horista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Horista.prototype.calcularSalario = function () {
        // Chama o método calcularSalario() da classe Diarista e divide o resultado por 24.
        return _super.prototype.calcularSalario.call(this) / 24;
    };
    return Horista;
}(Diarista));
// Testando minhas classes e suas instâncias
var empregado = new Empregado();
console.log(empregado.calcularSalario());
var diarista = new Diarista();
console.log(diarista.calcularSalario());
var horista = new Horista();
console.log(horista.calcularSalario());
