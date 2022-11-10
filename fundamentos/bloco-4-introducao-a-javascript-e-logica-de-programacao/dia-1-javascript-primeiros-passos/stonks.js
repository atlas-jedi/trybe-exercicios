const qtdVendas  = 1000;
const valorCusto = 1000;
const valorVenda = 2500 * qtdVendas;
const impostoSobreOCusto = valorCusto * 0.2;

if (qtdVendas < 0 || valorCusto < 0 || valorVenda < 0){
  console.error('Entradas inválidas. Os valores devem ser maior ou igual a zero.');
} else {
  const valorCustoTotal = valorCusto + impostoSobreOCusto;
  const lucro = valorVenda - valorCustoTotal;
  console.log(lucro);
}