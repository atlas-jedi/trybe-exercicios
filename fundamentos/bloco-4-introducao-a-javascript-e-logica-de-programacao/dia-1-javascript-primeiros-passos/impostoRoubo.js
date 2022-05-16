// Valor Constante do Salário Bruto
const salarioBruto = 3000.00;

/*
 INSS -> Instituto Nacional do Seguro Social;
 IR   -> Imposto de Renda;
 PDI  -> Parcela a Deduzir do Imposto.
*/
let INSS, IR, PDI;

// Valor do INSS com base no Salário Bruto
if (salarioBruto <= 1556.94){
  INSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92){
  INSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82){
  INSS = salarioBruto * 0.11;
} else {
  INSS = salarioBruto - 570.88;
}

// Cálculo do Salário Base
let salarioBase = salarioBruto - INSS;

// Valor do IR com base no Salário Base
if (salarioBase <= 1903.98 ){
  IR, PDI = 0;
} else if (salarioBase <= 2826.65){
  PDI = 142.80;
  IR  = (salarioBase * 0.075) - PDI;
} else if (salarioBase <= 3751.05){
  PDI = 354.80;
  IR  = (salarioBase * 0.150) - PDI;
} else if (salarioBase <= 4664.68){
  PDI = 636.13;
  IR  = (salarioBase * 0.225) - PDI;
} else {
  PDI = 869.36;
  IR  = (salarioBase * 0.275) - PDI;
}

// Cálculo do Salário Líquido
let salarioLiquido = salarioBase - IR;

// Exibindo resultado na tela
console.log(salarioLiquido);