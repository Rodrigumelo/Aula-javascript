/*Desafio 1: Calculadora Simples
Crie uma calculadora que solicite ao usuário dois números e a operação desejada (adição, subtração, multiplicação ou divisão). Exiba o resultado da operação
*/

const valor1 = 10;
const valor2 = 25;
const operacaoDesejada = 2;


if (operacaoDesejada === 1) {
    console.log(valor1 + valor2);
} else if (operacaoDesejada === 2) {
    console.log(valor1 - valor2);
} else if (operacaoDesejada === 3) {
    console.log(valor1 * valor2);
} else {
    console.log(valor1 / valor2);
}