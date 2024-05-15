function repeats(tomb){
    return tomb.filter(num => tomb.indexOf(num) == tomb.lastIndexOf(num)).reduce((acc, num) => acc + num, 0);
}