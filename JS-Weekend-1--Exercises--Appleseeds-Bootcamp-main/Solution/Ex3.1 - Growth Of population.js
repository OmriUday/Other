function nb_year(p0, percent, aug, p) {
  let popCalc = p0;
  for (var count_year = 0; popCalc < p; count_year++) {
    popCalc = (popCalc * ((percent / 100) + 1)) + aug;
  }
  console.log(`Starting from ${p0} to a target of ${p} ----> it will need ${count_year} entire yeaes`);
}
//test
nb_year(1000, 2, 50, 1200);
nb_year(1500, 5, 100, 5000);
nb_year(1500000, 2.5, 10000, 2000000);