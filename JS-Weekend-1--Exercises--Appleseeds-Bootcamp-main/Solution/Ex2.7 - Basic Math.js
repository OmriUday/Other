function basicOp(operator, num1, num2) {
  if (num1 < num2) {
    let smallNum = num1;
    num1 = num2;
    num2 = smallNum;
  }
  if (operator === '-') {
    console.log(`${num1} - ${num2} = `, (num1 - num2));
  }
  else if (operator === '/') {
    console.log(`${num1} : ${num2} = `, (num1 / num2));
  }
  else if (operator === '+') {
    console.log(`${num1} + ${num2} = `, (num1 + num2));
  }
  else {
    console.log(`${num1} x ${num2} = `, (num1 * num2));
  }
}
//test
basicOp('+', 2, 7);
basicOp('-', 2, 7);
basicOp('*', 2, 7);
basicOp('/', 2, 7);