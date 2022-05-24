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
// Exercício 3
// Exercício 4
// Exercício 5
// Exercício 6
// Exercício 7
