function adjacentElementsProduct(array) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        array[i]*array[i+1] > max ? max = array[i]*array[i+1] : max = max
    }
    console.log(max)
}
adjacentElementsProduct([1, 2, 3])
adjacentElementsProduct([1, 5, 10, 9])