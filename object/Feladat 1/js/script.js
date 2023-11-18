const matrix = document.getElementById("matrix");
const cellColors = ["", "", "", ""]
let currentColor = "red";

function changeColour(cell){
    const index = cell.dataset.index;
    cellColors[index] = currentColor;
    cell.style.backgroundColor = cellColors[index];
    if(currentColor === "red"){
        currentColor = "blue";
    }else{currentColor = "red";}
}
