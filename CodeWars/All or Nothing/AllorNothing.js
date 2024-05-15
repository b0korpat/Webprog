function AllorNothing(key, answers) {
    let good = 0
    let empty = 0
    for (let i = 0; i < answers.length; i++) {
       if (key[i] === answers[i]) {
          good++
       } else if (key[i] === "_") {
          empty++
       }
    }

    if(good+empty === answers.length){
        return true;
    }else if (good === 0) {
        return true;
    }else{
      return false;
    }
 }