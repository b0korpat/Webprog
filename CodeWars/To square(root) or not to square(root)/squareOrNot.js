function squareOrSquareRoot(tomb) {
    let result = [];
    for (let i = 0; i < tomb.length; i++) {
        let sqrt = Math.sqrt(tomb[i]);
        result.push(Number.isInteger(sqrt) ? sqrt : tomb[i] * tomb[i]);
    }
    return result;
}
