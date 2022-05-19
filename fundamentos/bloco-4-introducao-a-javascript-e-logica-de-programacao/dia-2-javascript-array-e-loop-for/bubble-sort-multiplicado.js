let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplicado = [];

console.log('Original    : ' + numbers.toString());

for (let index = 0; index < numbers.length; index += 1) {
  let nextIndex = index + 1;
  let newElement = numbers[index] * numbers[nextIndex];
  if (numbers[index+1] !== undefined){
    numbersMultiplicado.push(newElement);
  } else {
    numbersMultiplicado.push(numbers[index] * 2);
  }
}

console.log('Multiplicado: ' + numbersMultiplicado.toString());