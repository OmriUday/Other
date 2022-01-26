function findUniq(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      if (arr[i + 1] != arr[i + 2]) {
        console.log(`The unic number in the array is: ${arr[i + 1]}`);
        break;
      }
      else {
        console.log(`The unic number in the array is: ${arr[i]}`);
        break;
      }
    }
  }
}
//test
findUniq([0, 0, 0, 0, 0, 0, 0, 4]);
findUniq([0, 0, 5, 0, 0, 0, 0]);
findUniq([8, 0, 0, 0, 0, 0, 0, 0]);