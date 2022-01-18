function summation(num) {
  let sum = 0;
  for (i = num; i > 0; i--) {
    sum += i;
  }
  console.log(sum);
}
//test
summation(2);
summation(7);
summation(10);