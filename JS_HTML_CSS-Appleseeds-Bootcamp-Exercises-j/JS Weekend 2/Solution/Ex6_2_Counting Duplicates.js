const countDuplicates = (str) => {
  const objHelp = {};
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    let element = str.toUpperCase().charAt(i);
    if (objHelp[element]) {
      objHelp[element]++;
    }
    else {
      objHelp[element] = 1;
    }
  }
  for (const index in objHelp) {
    objHelp[index] = parseInt(objHelp[index] / 2);
    if (objHelp[index] >= 1) {
      res += objHelp[index];
    }
  }
  console.log(`(${str}) : `);
  console.log(objHelp);
  console.log(`---------> Result = ${res}`);
};
//test
countDuplicates("abxde");
countDuplicates("aabbcde");
countDuplicates("aabBcde");
countDuplicates("indivisibil|ities");
countDuplicates("|ndivisibil|ities");
countDuplicates("aA11");
countDuplicates("ABBA");
