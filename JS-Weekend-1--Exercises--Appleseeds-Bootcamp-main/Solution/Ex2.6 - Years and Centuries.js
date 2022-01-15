function centuryFromYear(year) {
  if (year % 100 == 0) {
    console.log(`the ${year / 100}th century`);
  }
  else {
    console.log(`the ${Math.floor((year / 100)) + 1}th century`);
  }
}
//test
centuryFromYear(2000);
centuryFromYear(1001);
centuryFromYear(3099);