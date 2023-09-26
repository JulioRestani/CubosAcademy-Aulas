const jogada1 = "pedra";
const jogada2 = "tesoura";

//seu código aqui

if (jogada1 === "pedra" && jogada2 === "tesoura"){
    console.log(jogada1);
} else if (jogada2 === "pedra" && jogada1 === "tesoura"){
    console.log(jogada2);
} else {
    console.log("empate");
}
