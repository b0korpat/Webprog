// 1. feladat Leonardo numbers - Leonardo számok
L = (n, L0, L1, add) => {
    let szamok = [L0, L1]
    for (let i = 2; i < n; i++) {
        szamok.push(szamok[i - 2] + szamok[i - 1] + add)
    }
    return szamok
}

console.log(L(5, 1, 1, 1), [1, 1, 3, 5, 9]);
console.log(L(5, 0, 0, 2), [0, 0, 2, 4, 8]);
console.log(L(5, 0, 0, 0), [0, 0, 0, 0, 0]);
console.log(L(10, 0, 1, 4), [0, 1, 5, 10, 19, 33, 56, 93, 153, 250]);



// 2. feladat Every nth array element - Minden n-edik tömbelem
function every(arr, interval, start) {
    let eredmeny = [];
    for (let i = start || 0; i < arr.length; i += interval || 1) {
        eredmeny.push(arr[i]);
    }
    return eredmeny;
}


console.log(every([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 1), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 2), [0, 2, 4]);
console.log(every([0, 1, 2, 3, 4], 3), [0, 3]);
console.log(every([0, 1, 2, 3, 4], 3, 1), [1, 4]);



// 3. feladat Odd Ones Out! - Páratlanok!
function oddOnesOut(nums) {
    let eredmeny = [];
    for (let i = 0; i < nums.length; ++i) {
        var count = 0;
        for (let j = 0; j < nums.length; ++j)
            if (nums[i] == nums[j]) {
                count++;
            }
        if (count % 2 == 0) {
            eredmeny.push(nums[i]);
        }
    }
    return eredmeny;
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);