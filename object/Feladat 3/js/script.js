let fizetes = {
    Anna: 2100,
    Cecil: 1890,
    Emil: 2050,
    Gerald: 2920
}

function totalPayOut(obj){
    let amount = 0
    for (let person in obj){
        amount += obj[person]
    }
    return amount
}

console.log(totalPayOut(fizetes))