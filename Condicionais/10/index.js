const caractere = "E";

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U" || caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    if (caractere === caractere.toUpperCase()) {
        console.log("Vogal maiúscula");
    } else {
        console.log("Vogal minúscula");
    }
} else if ((caractere >= "a" && caractere <= "z") || (caractere >= "A" && caractere <= "Z")) {
    console.log("Consoante");
} else if (caractere >= "0" && caractere <= "9") {
    console.log("Número");
} else {
    console.log("Caractere inválido");
}
