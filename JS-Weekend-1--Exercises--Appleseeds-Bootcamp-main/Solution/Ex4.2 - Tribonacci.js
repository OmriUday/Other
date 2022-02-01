function ribonacci(n) { // n = the number of the organ in the array
  const resArr = [0, 1, 1];
  let calcNumber = 0;
  if (n === 0) {
    resArr = [];
    console.log(resArr);
  }
  else {
    for (let j = 3; j <= n; j++) {
      resArr[j] = resArr[j - 1] + resArr[j - 2] + resArr[j - 3];
    }
  }
  console.log(resArr);
}
//test
ribonacci(12);