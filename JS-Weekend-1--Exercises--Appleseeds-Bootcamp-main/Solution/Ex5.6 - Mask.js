function maskify(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!((str.length) - i <= 4)) {
      newStr += '#';
    }
    else {
      newStr += str[i];
    }
  }
  console.log(newStr);
}
//test
maskify('4556364607935616');
maskify('64607935616');
maskify('1');
maskify('');
maskify('Skippy');
maskify('"Nananananananananananananananana Batman!');