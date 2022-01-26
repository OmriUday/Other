function fibonacci(n) { // n = the number of the organ in the array
  const resArr = [0, 1];
  let calcNumber = 0;
  for (let j = 2; j <= n; j++) {
    resArr[j] = resArr[j - 1] + resArr[j - 2];
  }
  console.log(resArr);
}
//test
fibonacci(11);