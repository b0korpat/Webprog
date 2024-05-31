function blowCandles(str) {
    let candles = str.split('').map(Number);
    let time = 0;
    for (let i=0; i<str.length; i++) {
      if (candles[i] > 0) {
        time += candles[i];
        candles[i+1] -= candles[i];
        candles[i+2] -= candles[i];
      }
    }
    return time;
  }