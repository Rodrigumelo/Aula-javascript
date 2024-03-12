/*esafio 2: Conversor de Temperatura
Crie um programa que permita ao usuário converter entre Celsius e Fahrenheit. Solicite ao usuário que escolha a unidade de entrada, insira o valor e exiba a conversão.

Celsius = 1
Fahrenheit = 2


Algumas correspondências Celsius x Fahrenheit:
0 °C = 32 °F
5 °C = 41 °F
10 °C = 50 °F
15 °C = 59 °F
20 °C = 68 °F
25 °C = 77 °F
30 °C = 86 °F
35 °C = 95 °F
40 °C = 104 °F
*/

const valordeTemperatura = 68;
const converterPara = 1;

if (converterPara === 1) {
    console.log((valordeTemperatura - 32) / 1.8 + ' °C'); /*Para converter graus Fahrenheit em graus Celsius, subtraia 32 e divida por 1,8.*/
} else {
    console.log(valordeTemperatura * 1.8 + 32 + ' °F'); /*Para converter graus Celsius em graus Fahrenheit, multiplique por 1,8 e adicione 32*/
}