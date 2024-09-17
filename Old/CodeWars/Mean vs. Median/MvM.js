function meanVsMedian(numbers) {
    let mean = numbers.reduce((x, y) => x + y) / numbers.length;
    numbers.sort((a,b) => a-b);
    let median = numbers[Math.floor(numbers.length / 2)]
    console.log(mean)
    console.log(median)
    console.log(mean === median ? "same" : mean > median ? "mean" : "median")
    return mean == median ? "same" : mean > median ? "mean" : "median"
}

meanVsMedian([1, 1, 1])
meanVsMedian([1, 2, 37])
meanVsMedian([7, 14, -70])
