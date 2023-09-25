const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const limite = 5;

while (filaDeFora.length > 0 && filaDeDentro.length < limite) {
    const pessoa = filaDeFora.shift();
    filaDeDentro.push(pessoa);
}

console.log(filaDeDentro);
console.log(filaDeFora);