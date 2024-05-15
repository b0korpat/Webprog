function gimmeTheLetters(a) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let start = letters.indexOf(a[0]);
    let end = letters.indexOf(a[2]) + 1;
    return letters.substring(start, end);
}