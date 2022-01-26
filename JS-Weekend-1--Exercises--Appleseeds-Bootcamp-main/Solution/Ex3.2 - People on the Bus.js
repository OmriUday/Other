function peopleOnBus(arr) {
  let inBus = 0, j;
  for (let i = 0; i < arr.length; i++) {
    j = 0;
    inBus += (arr[i][j] - arr[i][j + 1]);
  }
  console.log(`The number of people still inside the bus at the last stop is: ${inBus} people`);
}
//test
peopleOnBus([[8, 0], [4, 5], [11, 8], [4, 7], [10, 2], [0, 5]]);
