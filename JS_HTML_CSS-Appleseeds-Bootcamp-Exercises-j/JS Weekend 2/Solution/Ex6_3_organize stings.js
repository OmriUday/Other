function organizesStr(s1, s2) {
  return [...new Set(s1 + s2)].sort().join("");
}
//test
console.log(organizesStr("xyaabbbccccdefww", "xxxxyyyyabklmopq"));