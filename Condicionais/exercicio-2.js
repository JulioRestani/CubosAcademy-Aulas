const valorProduto = 1000;
const parcelas = 11;

if (parcelas === 1) {
    const desconto = valorProduto * 0.1;
    const valorTotal = valorProduto - desconto;
    console.log(`O total da compra é R$ ${valorTotal.toFixed(2)}. À vista tem desconto de 10%.`);
} else if (parcelas >= 2 && parcelas <= 6) {
    const valorParcela = (valorProduto / parcelas).toFixed(2);
    console.log(`Você parcelou em ${parcelas}x de R$ ${valorParcela}.`);
} else if (parcelas >= 7 && parcelas <= 12) {
    const juros = valorProduto * Math.pow(1 + 0.01, parcelas);
    const valorParcela = (juros / parcelas).toFixed(2);
    console.log(`Você parcelou em ${parcelas}x de R$ ${valorParcela}, com juros totalizando R$ ${juros.toFixed(2)}.`);
} else {
    console.log("Número de parcelas inválido.");
}
