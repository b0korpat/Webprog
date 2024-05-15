var ownedCatAndDog = function(catYear, dogYear) {
    let ownedCat = 0;
    let ownedDog = 0;
    if (catYear >= 15) {
        ownedCat += 1;
        catYear -= 15;
        if (catYear >= 9) {
            ownedCat += 1;
            catYear -= 9;
            ownedCat += Math.floor(catYear / 4);
        }
    }
    if (dogYear >= 15) {
        ownedDog += 1;
        dogYear -= 15;
        if (dogYear >= 9) {
            ownedDog += 1;
            dogYear -= 9;
            ownedDog += Math.floor(dogYear / 5);
        }
    }
    return [ownedCat, ownedDog];
}
