function stringRepeat(num, str) {
  let newStr = '';
  for (i = 0; i < num; i++) {
    newStr += str;
  }
  console.log(newStr);
}
//test
stringRepeat(5, 'l');
stringRepeat(8, 'lol');