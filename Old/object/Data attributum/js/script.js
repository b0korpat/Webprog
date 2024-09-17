const matrix = document.getElementById("matrix");
const cellColors = ["", "", "", ""]


function changeColour(cell) {
    const index = cell.dataset.index;
    cell.style.backgroundColor = cellColors[index];
    if (cellColors[index] === "" || cellColors[index] === "blue") {
        cellColors[index] = "red"
        cell.style.backgroundColor = "red"
    } else {
        cellColors[index] = "blue"
        cell.style.backgroundColor = "blue"
    }
}
