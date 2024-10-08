// 1. feladat
// Remove First and Last Character Part Two
function removeFirstAndLast(string) {

    let s = string.split(',');
    if (s.length >= 3) {
        s.splice(0, 1);
        s.splice(s.length - 1, 1);
    
        return s.join(',');

    } else {
        return null;
    }
}

console.log('1. feladat\n')
console.log(removeFirstAndLast(''), null);
console.log(removeFirstAndLast('1'), null);
console.log(removeFirstAndLast('A1,B2'), null);
console.log(removeFirstAndLast('1,2,3'), '2');
console.log(removeFirstAndLast('1,2,3,4'), '2 3');
console.log(removeFirstAndLast('A1,B2,C3,D4,E5'), 'B2 C3 D4');
console.log(removeFirstAndLast('A,1,23,456,78,9,Z'), '1 23 456 78 9');

// 2. feladat
// Is every value in the array an array?
const arrCheck = value => {
    if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            if (!Array.isArray(value[i])) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}


console.log('\n2. feladat\n')
console.log(arrCheck([]), true);
console.log(arrCheck([['string']]), true);
console.log(arrCheck([[], {}]), false);
console.log(arrCheck([[1], [2], [3]]), true);
console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']), false);


// 3. feladat
// All or Nothing
function allOrNothing(key, answers) {
    let correct = 0;
    let empty = 0;
    for (let i = 0; i < answers.length; i++) {
        key[i] === answers[i] ? correct++ : key[i] === "_" ? empty++ : null
    }
    return correct + empty === answers.length ? true : correct === 0 ? true : false;
}

console.log('\n3. feladat\n')
console.log(allOrNothing([..."A_C_B"], [..."ADCEB"]), true);
console.log(allOrNothing([..."B_B"], [..."BDC"]), false);
console.log(allOrNothing([..."T_FFF"], [..."FFTTT"]), true);
console.log(allOrNothing([..."BA__"], [..."BACC"]), true);
console.log(allOrNothing([..."ABA_"], [..."BACC"]), true);
console.log(allOrNothing([..."ABC_"], [..."BACC"]), false);
console.log(allOrNothing([..."B_"], [..."CA"]), true);
console.log(allOrNothing([..."BA"], [..."CA"]), false);
console.log(allOrNothing([..."B"], [..."B"]), true);
console.log(allOrNothing([..."_T__"], [..."TFFF"]), true);
console.log(allOrNothing([..."_T__"], [..."TTFT"]), true);
console.log(allOrNothing([..."_TTT"], [..."TTFT"]), false);
console.log(allOrNothing([..."_TTT"], [..."TTTT"]), true);
console.log(allOrNothing([..."_TTT"], [..."FFFF"]), true);
console.log(allOrNothing([..."____"], [..."FFFF"]), true);