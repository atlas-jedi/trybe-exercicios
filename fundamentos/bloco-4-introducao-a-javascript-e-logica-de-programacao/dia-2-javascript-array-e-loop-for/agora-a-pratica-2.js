/*
  Enunciados das questões:

  8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
  9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
*/

let myArray = []

for (let i = 1; i < 25; i++){
  myArray.push(i);
}

console.log('Resultado do array: ' + myArray);

myArray.forEach(element => {
  console.log(element / 2);
});
