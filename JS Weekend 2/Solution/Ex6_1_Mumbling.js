const accum = (str) => {
  if (!str.match(/^[A-Za-z]+$/)) {
    return "Please enter letters between a-z or A-Z only";
  }
  let res = "";
  for (let i=0 ; i<str.length ; i++) {
     res += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + `-`;
  }
  res = res.slice(0, -1);
  return res;
};
//test
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwA2t"));