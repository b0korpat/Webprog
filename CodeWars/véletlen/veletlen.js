function legyenVeletlenSorrend(tomb) {
    let ujTomb = tomb;
    let currentIndex = ujTomb.length, randomIndex;
    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [ujTomb[currentIndex], ujTomb[randomIndex]] = [
            ujTomb[randomIndex], ujTomb[currentIndex]];
    }
    return ujTomb;
}

console.log(legyenVeletlenSorrend(["h", "k", "sze", "cs", "p", "szo", "v"]))
console.log(legyenVeletlenSorrend([1, 2, 3, 4, 5, 6, 7, 8, 9]))