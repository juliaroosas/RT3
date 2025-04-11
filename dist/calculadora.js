"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.subtrair = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            console.log("Não é possível dividir por zero.");
            return 0;
        }
        return a / b;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
