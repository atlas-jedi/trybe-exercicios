// Exercício 1
function verificaPalindrome(word) {
  word = word.toLowerCase();
  let wordPalindrome = '';
  for (let i = word.length - 1; i >= 0; i -= 1) {
    wordPalindrome += word[i];
  }
  if (wordPalindrome === word) {
    return true;
  }
  return false;
}

// Exercício 2
function indiceMaiorValor(array) {
  let maiorValor = array[0];
  array.forEach(element => {
    if (element > maiorValor) {
      maiorValor = element;
    }
  });
  return array.indexOf(maiorValor);
}

// Exercício 3
function indiceMenorValor(array) {
  let menorValor = array[0];
  array.forEach(element => {
    if (element < menorValor) {
      menorValor = element;
    }
  });
  return array.indexOf(menorValor);
}

// Exercício 4
function maiorPalavra(array) {
  let maiorPalavra = array[0];
  array.forEach(element => {
    if (element.length > maiorPalavra.length) {
      maiorPalavra = element;
    }
  });
  return maiorPalavra;
}

// Exercício 5
function repeatNumber(array) {
  let contadorRepeatNumber = 0;
  let lastNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] === array[i]) {
        contadorRepeatNumber += 1;
      }
    }
  }
  return contadorRepeatNumber;
}

// Exercício 6
function somatario(number) {
  let soma = 0;
  if (number > 0) {
    for (let i = 1; i <= number; i += 1) {
      soma += i;
    }
  }
  return soma;
}

// Exercício 7
