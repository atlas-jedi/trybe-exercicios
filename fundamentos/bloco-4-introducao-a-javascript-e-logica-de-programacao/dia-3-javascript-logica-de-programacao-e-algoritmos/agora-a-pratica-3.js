let array = ['java', 'javascript', 'python', 'html', 'css'];

// Algoritmo 1 [Maior Palavra do Array]
let maiorPalavra = array[0];
array.forEach((element) => {
  if (element.length > maiorPalavra.length) {
    maiorPalavra = element;
  }
});
console.log(`A maior palavra do array é: ${maiorPalavra}`);

// Algoritmo 2
let menorPalavra = array[0];
array.forEach((element) => {
  if (element.length < menorPalavra.length) {
    menorPalavra = element;
  }
});
console.log(`A menor palavra do array é: ${menorPalavra}`);