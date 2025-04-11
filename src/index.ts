import { Calculadora } from './calculadora';

const calc = new Calculadora();

const a = 10;
const b = 2;

console.log("Soma:", calc.somar(a, b));
console.log("Subtração:", calc.subtrair(a, b));
console.log("Multiplicação:", calc.multiplicar(a, b));
console.log("Divisão:", calc.dividir(a, b));
