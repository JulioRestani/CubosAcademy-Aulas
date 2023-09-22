const C = 60000; 
const M = 90000; 
const n = 24; 

const i = (M / C) ** (1 / n) - 1; 
const juros = (i * 100).toFixed(3); 

console.log(`O seu financiamento de ${C} reais teve uma taxa de juros de ${juros}%, pois após ${n} meses você teve que pagar ${M} reais.`);
