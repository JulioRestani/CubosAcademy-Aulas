const letras = ["A", "a", "B", "C", "E", "e"];

const quantidade = letras.filter(letra => letra.toLowerCase() === "e").length;

if (quantidade > 0) {
    console.log(`Foram encontradas ${quantidade} letras 'E' ou 'e'.`);
}
