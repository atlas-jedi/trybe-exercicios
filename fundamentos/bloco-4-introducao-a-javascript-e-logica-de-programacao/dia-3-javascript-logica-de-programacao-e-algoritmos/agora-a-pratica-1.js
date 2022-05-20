let n = 10;
let test = [n];

for (let i = n-1; i >= 1; i -= 1) {
  test.push(i);
  n *= i;
}

console.log(`${test[0]}! = ${test.toString().replaceAll(',', '*')} = ${n}`);