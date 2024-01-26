function getAverage(marks){
  let sum = 0
  marks.forEach( num => {
   sum += num;
 })
  return Math.floor(sum / marks.length)
 }
getAverage([1,2,3,4,5,])