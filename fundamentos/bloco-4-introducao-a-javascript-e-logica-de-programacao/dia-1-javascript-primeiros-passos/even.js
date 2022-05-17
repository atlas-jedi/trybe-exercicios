const n1 = 1;
const n2 = 2;
const n3 = 5;

function even(number){
  if ((number % 2) === 0){
    return true;
  } else {
    return false;
  }
}

console.log (even(n1) + "\n" + even(n2) + "\n" + even(n3));