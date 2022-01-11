function findNextSquare(num) {
  if (Math.sqrt(num) % 1 == 0) { //complete number
    let square = Math.sqrt(num) + 1;
    console.log(`(${num}) ----->`, Math.pow(square, 2));
  }
  else { //no complete
    console.log(`-1 since ${num} is not a perfect`);
  }
}
//test
findNextSquare(121);
findNextSquare(114);
