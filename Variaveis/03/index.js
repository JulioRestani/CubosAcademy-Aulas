const valorTotal = 130.99;
const meuDinheiro = 80.00;

const valor_do_desconto = valorTotal - meuDinheiro;

const desconto = (valor_do_desconto / valorTotal) * 100;



console.log(`Para conseguir comprar o tênis, é necessário um desconto de aproximadamente ${desconto.toFixed(2)}%.`);
