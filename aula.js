
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1000;

const litrosConsumidos =  distanciaEmKm / kmPorLitros;
const preco = litrosConsumidos * precoCombustivel;

console.log(preco.toFixed(2));
