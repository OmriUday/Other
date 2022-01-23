function trimmingString(str) {
  let newStr = str.slice(1, str.length - 1);
  console.log(newStr);
}
//test
trimmingString('abc');
trimmingString('1abc2');
trimmingString('weweabcwewe');
trimmingString('eeabcrr');