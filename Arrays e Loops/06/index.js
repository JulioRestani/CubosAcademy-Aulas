const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let total = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        total = total + numeros[i];
    }
}

console.log(total);
