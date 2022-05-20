let maiorPrimo = 1;

for (let i = 1; i <= 50; i += 1) {
  if (primo(i)) {
    if (i > maiorPrimo) {
      maiorPrimo = i;
    }
  }
}

function primo(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

console.log(maiorPrimo);