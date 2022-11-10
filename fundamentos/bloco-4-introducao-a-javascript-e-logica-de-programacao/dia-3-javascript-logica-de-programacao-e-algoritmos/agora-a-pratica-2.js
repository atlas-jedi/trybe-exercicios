let reverseWord = (word) => {
  let newWord = [];
  for (let i = word.length - 1; i >= 0; i -= 1){
    newWord.push(word[i]);
  }
  return newWord.toString().replaceAll(',', '');
}

console.log(reverseWord('tryber'));