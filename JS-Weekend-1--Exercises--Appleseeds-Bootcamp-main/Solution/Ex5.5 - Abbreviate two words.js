function abbreviateTwoWords(str) {
  let newStr = str[0];
  newStr += '.';
  for (let i = 1; i < str.length - 1; i++) {
    if (str[i] == ' ') {
      i++;
      newStr += str[i];
    }
  }
  console.log(newStr);
}
//test
abbreviateTwoWords(`Sam Harris`);
abbreviateTwoWords(`Patrick Feeney`);