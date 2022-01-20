function sumSmallest(arr) {
  let small1 = Math.min(...arr);
  arr.splice(arr.indexOf(small1), 1);
  let small2 = Math.min(...arr);
  arr.indexOf(small2);
  console.log((small1) + (small2));
}
//test
sumSmallest([0, 8, 11, 43, 90, 9, 6, 18, 3]);