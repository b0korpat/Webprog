function pairs(ar) {
    let c = 0;
        for (var i = 0; i < ar.length; i+=2) {
            if (ar[i] + 1 === ar[i + 1] || ar[i] - 1 === ar[i + 1]) {
                c++;
            }
        }
    return c;
}