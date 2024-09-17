function gimme (triplet) {
    let middle = triplet.slice().sort((a, b) => a - b)[1];
    return triplet.indexOf(middle);
}
