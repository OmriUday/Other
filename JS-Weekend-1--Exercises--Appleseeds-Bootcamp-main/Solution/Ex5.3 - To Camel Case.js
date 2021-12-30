function toCamelCase(str) {
  let check = 0, newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] === '-' || str[i] === '_')) {
      if (check === 1) {
        newStr += str[i].toUpperCase();
        check = 0;
      }
      else {
        newStr += str[i];
      }
    }
    else {
      newStr += '';
      check = 1;
    }
  }
  console.log(newStr);
}
//test
toCamelCase('the-stealth-warrior');
toCamelCase('The_Stealth_Warrior');