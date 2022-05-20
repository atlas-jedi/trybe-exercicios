let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  // Exercício 2
  recorrente: 'Sim',
};

// Exercício 1
console.log(`Bem-Vinda, ${info.personagem}`);

// Exercício 2
console.log(info);

// Exercício 3
for (propriedade in info) {
  console.log(propriedade);
}