function longestWords(str) {
  let shortword, words = str.split(" ");
  for (let word of words) {
    if (shortword === undefined || shortword < word.length) {
      shortword = word.length;
    }
  }
  console.log(shortword);
}
longestWords(`aaa aaaaa aa aaaa aaaaaaaaaa`);