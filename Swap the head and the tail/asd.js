function maskify(cc) {
    let arr =cc.split("");
    if(arr.length >4){
      return arr.splice(1,3,'#')
    }else{
      return arr
    }
    }




    console.log(maskify('4556364607935616'), '############5616');
    console.log(maskify('1'), '1');
    console.log(maskify('11111'), '#1111');