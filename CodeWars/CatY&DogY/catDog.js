var humanYearsCatYearsDogYears = function(humanYear) {
    let catYear = 0;
    let dogYear = 0;
    if (humanYear >= 1) {
      catYear += 15;
      dogYear += 15;
    }
    if (humanYear >= 2) {
      catYear += 9;
      dogYear += 9;
    }
    if (humanYear > 2) {
      catYear += (humanYear - 2) * 4;
      dogYear += (humanYear - 2) * 5;
    }
    return [humanYear, catYear, dogYear];
}
