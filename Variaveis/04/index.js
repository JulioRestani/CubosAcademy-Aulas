const C = 1000;
const i = 0.125;
const t = 5;

const M = C * ((1 + i) ** t);

console.log(`O valor do montante é de R$ ${M.toFixed(2)}.`);
