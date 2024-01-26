const swapHeadAndTail = (arr) => {
  if (arr.length % 2 == 1) {
    let midIndex = Math.floor(arr.length / 2);
    let mid = arr.slice(midIndex, midIndex + 1);
    let firstPart = arr.slice(0, midIndex);
    let SecPart = arr.slice(midIndex + 1);
    console.log(SecPart.concat(mid, firstPart))
    return SecPart.concat(mid, firstPart)

  } else {
    let firstPart = arr.slice(0, arr.length / 2);
    let SecPart = arr.slice(arr.length / 2);
    console.log(SecPart.concat(firstPart))
    return SecPart.concat(firstPart)
  }
}

let res = swapHeadAndTail([1, 2, 3, 4, 5])
console.log(res)