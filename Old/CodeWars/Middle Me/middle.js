function middleMe(N, X, Y) {
    var s = "";
    if (N % 2 == 1) {
        return X;
    }else{
        for (var i = 0; i < N/2; i++) {
            s += Y;
        }
        s+= X;
        for (var i = 0; i < N/2; i++) {
            s += Y;
        }
        return s;
    }

}

console.log(middleMe(19, 'z', '#'));