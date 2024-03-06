
const precoEtanol = 3.42;
const precoGasolina = 5.74;
const tipoDeCombustivel = 'Etanol';
const gastoPorkm = 10;
const distanciaTotalEmKm = 100;

const gastoEmLitroPorKm = distanciaTotalEmKm / gastoPorkm;


if (tipoDeCombustivel === 'Etanol') {
    const gastoTotalDeEtanool = gastoEmLitroPorKm * precoEtanol;
    console.log(gastoTotalDeEtanool.toFixed(2));
} else {
    const gastoTotalDeGasolina = gastoEmLitroPorKm * precoGasolina;
    console.log(gastoTotalDeGasolina.toFixed(2));
}
