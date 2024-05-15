function squareUp(n)
{
    let tomb = [];
    for(let i = 1; i <= n; i++){
      for(let j = n; j >= 1; j--){
        if(j > i){
          tomb.push(0);
        }
        else{
          tomb.push(j);
        }
      }
    }
    return tomb; 
}