function dnaStrand(dna) {
    var result = "";
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            result += "T";
        }
        else if (dna[i] === "T") {
            result += "A";
        }
        else if (dna[i] === "C") {
            result += "G";
        }
        else if (dna[i] === "G") {
            result += "C";
        }
        else {
            result += dna[i];
        }
    }
    return result;
}


console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));