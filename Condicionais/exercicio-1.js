const valorProduto = 1000;
const parcelas = 4;

if (parcelas === 1) {
    const desconto = valorProduto * 10/valorProduto;
    const valorTotal = valorProduto - desconto;
    console.log(`O total da compra deu R$ ${valorProduto}, a vista tem desconto de 10%`)
} else {
    const valorParcela = valorProduto / parcelas;
    console.log(`Você parcelou em ${parcelas.toFixed(2)}, você deve pagar R$${valorParcela}`);
}