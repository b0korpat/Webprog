var tomb = [];
var elemekKiiras= document.getElementById("tombElemei");
var hibaUzenet = document.getElementById("hibaUzenet");

function Hozzaadas() {
    var ki = ""
    var hiba = ""
    var ujElem = document.getElementById("ujelem")
    if (ujElem == null) {
        hiba
    }




    tomb.push(ujElem.value)
    console.log(ujElem.value)   
    elemekKiiras.innerHTML += `<div class="elem">${ujElem.value}</div>`


}