const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const PORT = 3000;
const app = express();
const filePath = path.join(__dirname, 'public', 'szoveg.txt');

// Middleware-ek beállítása
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors()); 

// Szöveg olvasása
app.get('/read', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Hiba történt a fájl olvasása közben.');
        }
        res.send(data);
    });
});

// Szöveg mentése
app.post('/save', (req, res) => {
    const newText = req.body.text;
    fs.writeFile(filePath, newText, 'utf8', (err) => {
        if (err) {
            return res.status(500).send('Hiba történt a fájl mentése közben.');
        }
        res.send('Szöveg mentve!');
    });
});

// Szerver indítása
app.listen(PORT, () => { 
    console.log(`Szerver működik a http://localhost:${PORT}`);
});
