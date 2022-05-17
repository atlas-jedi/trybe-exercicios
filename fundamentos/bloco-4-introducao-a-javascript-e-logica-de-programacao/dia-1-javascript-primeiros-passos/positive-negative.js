const positiveNegative = (value) => {
  if (value > 0){
    return 'positive';
  } else if ( value < 0){
    return 'negative';
  } else {
    return 'zero';
  }
}

console.log(positiveNegative(0));