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

// Exercício 4
for (propriedade in info) {
  console.log(info[propriedade]);
}

// Exercício 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178'",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

let infos = {
  recorrente: () => {
    if (info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
      return 'Ambos Recorrente';
    }
    return 'Apenas uma é recorrente'
  },
}

console.log(`
${info.personagem} e ${info2.personagem}
${info.origem} e ${info2.origem}
${info.nota} e ${info2.nota}
${infos.recorrente()}
`);

// Exercício 6


// Exercício 7


// Exercício 8

