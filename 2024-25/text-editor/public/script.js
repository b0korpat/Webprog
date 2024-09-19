// Szöveg betöltése a szerverről
function readFile() {
    fetch('/read')
    .then(response => response.text())
    .then(data => {
        document.getElementById('text').value = data;
    });
}

// Szöveg mentése a szerverre
function saveText() {
    const text = document.getElementById('text').value;

    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    });
}
