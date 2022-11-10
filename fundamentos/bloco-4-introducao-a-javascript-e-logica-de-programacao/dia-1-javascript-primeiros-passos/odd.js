const n1 = 1;
const n2 = 2;
const n3 = 5;

function odd(number){
  if ((number % 2) === 1){
    return true;
  } else {
    return false;
  }
}

console.log (odd(n1) + "\n" + odd(n2) + "\n" + odd(n3));