//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorRestante = valorDoProduto - valorPago;

if (valorRestante > 0) {
  const valorDaParcela = valorRestante / quantidadeDoParcelamento;
  const quantidadeDeParcelasRestantes = quantidadeDoParcelamento - 1;
  console.log(`Restam ${quantidadeDeParcelasRestantes} parcelas de R$${valorDaParcela.toFixed(2)}`);
} else {
  console.log("O valor do produto já foi pago");
}