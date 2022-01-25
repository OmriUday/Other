function toWeirdCase(str) {
  let capitalStr = str.toUpperCase() , i = 1;
  let newStr = capitalStr[0];
  while (i < str.length && str.length - i != 1) {
    newStr += capitalStr[i].toLowerCase();
    i++;
    newStr += capitalStr[i];
    if (str[i] === ' ') {
      i++;
      newStr += capitalStr[i];
    }
    i++;
  }
  if (str.length - i === 1) {
    newStr += capitalStr[i].toLowerCase();
  }
  console.log(newStr);
}
//test - For even String
toWeirdCase(`String`);
toWeirdCase(`Weird string case\n`);
//test - For odd String
toWeirdCase(`Stringh`);
toWeirdCase(`Weird string caseh`);