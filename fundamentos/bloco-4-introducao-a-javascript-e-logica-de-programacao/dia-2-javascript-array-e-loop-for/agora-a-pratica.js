/*
  Enunciados das questões:

  1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
  2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
  3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
    * A média aritmética é o resultado da soma de todos os elementos divido pelo número total de   elementos.
  4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
  5.🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
  6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
  7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum  = 0, bigger = 0, even = 0;
let less = numbers[0];

for (i in numbers){
  sum += numbers[i];
  console.log(numbers[i]);
  // Verificando o maior número do array
  if (numbers[i] > bigger){
    bigger = numbers[i];
  }
  // Verificando qual é o menor valor do array
  if (numbers[i] < less){
    less = numbers[i];
  }
  // Contando os números ímpares do array
  if ((numbers[i] % 2) === 1){
    even += 1;
  } else if (even === 0) {
    console.log('nenhum valor impar encontrado');
  }
}

// Exibe a soma de todos os elementos do array
console.log(`\nA soma de todos os números do array é: ${sum}`);

// Calcula e exibe a média aritmética de todos os números do array
let media = sum / numbers.length;
console.log(`\nA média aritmética de todos os números do array é: ${media}`);

// Verifica se o número calculado da média é maior ou menor que 20
if (media > 20){
  console.log('Valor maior que 20\n')
} else {
  console.log('Valor menor ou igual a 20\n');
}

// Exibe mais curiosidades desse array [comentário desnecessário]
console.log(`O maior valor do array é: ${bigger}`);
console.log(`O menor valor do array é: ${less}`);
console.log(`O número de ímpares no array é: ${even}`);