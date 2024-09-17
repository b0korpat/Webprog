function minSum(tomb) {
    tomb.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < tomb.length / 2; i++) {
        sum += tomb[i] * tomb[tomb.length - 1 - i];
    }
    return sum;
}