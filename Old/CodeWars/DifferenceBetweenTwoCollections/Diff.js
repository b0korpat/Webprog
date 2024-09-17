function difference(a, b) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            arr.push(a[i]);
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) {
            arr.push(b[i]);
        }
    }
    arr = arr.filter((item, index) => arr.indexOf(item) === index);
    arr.sort();
    return arr;
}