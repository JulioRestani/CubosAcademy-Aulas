const ladoA = 4;
const ladoB = 4;

//seu código aqui

if (ladoA === ladoB && ladoA === 0){
    console.log("Sim, é uma bucha Branco")
}else if   (ladoA === ladoB && ladoA === 1){
    console.log("Sim, é uma bucha Ás")
}else if  (ladoA === ladoB && ladoA === 2){
    console.log("Sim, é uma bucha Duque")
}else if  (ladoA === ladoB && ladoA === 3){
    console.log("Sim, é uma bucha Terno")
}else if (ladoA === ladoB && ladoA === 4){
    console.log("Sim, é uma bucha Quadra")
}else if  (ladoA === ladoB && ladoA === 5){
    console.log("Sim, é uma bucha Quina")
}else if  (ladoA === ladoB && ladoA === 6){
    console.log("Sim, é uma bucha Sena")
}else {
    console.log("Não é uma bucha")
}