// All or Nothing
function possiblyPerfect(key, answers) {
    let correct = 0;
    let empty = 0;
    for (let i = 0; i < answers.length; i++) {
        key[i] === answers[i] ? correct++ : key[i] === "_" ? empty++ : null
    }
   return correct + empty === answers.length ? true : correct === 0 ? true : false;
}

console.log(possiblyPerfect([..."A_C_B"], [..."ADCEB"]) + " >> true ");
console.log(possiblyPerfect([..."B_B"], [..."BDC"]) + " >> false ");
console.log(possiblyPerfect([..."T_FFF"], [..."FFTTT"]) + " >> true ");
console.log(possiblyPerfect([..."BA__"], [..."BACC"]) + " >> true ");
console.log(possiblyPerfect([..."ABA_"], [..."BACC"]) + " >> true ");
console.log(possiblyPerfect([..."ABC_"], [..."BACC"]) + " >> false ");
console.log(possiblyPerfect([..."B_"], [..."CA"]) + " >> true ");
console.log(possiblyPerfect([..."BA"], [..."CA"]) + " >> false ");
console.log(possiblyPerfect([..."B"], [..."B"]) + " >> true ");
console.log(possiblyPerfect([..."_T__"], [..."TFFF"]) + " >> true ");
console.log(possiblyPerfect([..."_T__"], [..."TTFT"]) + " >> true ");
console.log(possiblyPerfect([..."_TTT"], [..."TTFT"]) + " >> false ");
console.log(possiblyPerfect([..."_TTT"], [..."TTTT"]) + " >> true ");
console.log(possiblyPerfect([..."_TTT"], [..."FFFF"]) + " >> true ");
console.log(possiblyPerfect([..."____"], [..."FFFF"]) + " >> true ");



// Mean vs. Median
function meanVsMedian(numbers) {
    let mean = numbers.sort((a, b) => a + b).reduce((x, y) => x + y) / numbers.length
    let median = numbers[Math.floor(numbers.length / 2)];
    return mean == median ? "same" : mean > median ? "mean" : "median";
}

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');



// Swap the head and the tail
function swapHeadAndTail(arr) {
    if (arr.length % 2 == 1) {
        let midIndex = Math.floor(arr.length / 2);
        let mid = arr.slice(midIndex, midIndex + 1);
        let firstPart = arr.slice(0, midIndex);
        let secPart = arr.slice(midIndex + 1);
        return secPart.concat(mid, firstPart)
    } else {
        let firstPart = arr.slice(0, arr.length / 2);
        let secPart = arr.slice(arr.length / 2);
        return secPart.concat(firstPart)
    }
}



console.log(swapHeadAndTail([1, 2, 3, 4, 5]), [4, 5, 3, 1, 2]);
console.log(swapHeadAndTail([-1, 2]), [2, -1]);
console.log(swapHeadAndTail([1, 2, -3, 4, 5, 6, -7, 8]), [5, 6, -7, 8, 1, 2, -3, 4]);