let txt = "dasd3dasdasd2"
function getNumberFromString(text) {
    console.log(text.replace(/\D/g, ''))
    return parseInt(text.replace(/\D/g, ''))
  }

getNumberFromString(txt)