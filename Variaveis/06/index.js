const tempo = 10; 

const distPercorrida = 500; 

let velocidade = distPercorrida /tempo; 
velocidade *= 3.6; 

console.log(`A velocidade média é de ${velocidade.toFixed(2)} km/h.`);