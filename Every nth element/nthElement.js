function every(arr, interval, start){
    var result = [];
    for (var i = start || 0; i < arr.length; i += interval || 1) {
      result.push(arr[i]);
    }
    return result;
  }
  