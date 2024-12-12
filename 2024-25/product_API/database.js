import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initializeDB = async () => {
    await dbRun("DROP TABLE IF EXISTS products");
    await dbRun(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        picture TEXT,
        price REAL
    )`);

    const products = [
        { name: "Alma", description: "Ez egy alma", picture: "alma.jpg", price: 70 },
        { name: "Körte", description: "Ez egy körte", picture: "korte.jpg", price: 100 },
        { name: "Tejföl", description: "Ez egy tejföl", picture: "tejfol.jpg", price: 8000 },
        { name: "Festék", description: "Ez egy festék", picture: "festék.jpg", price: 2 },
    ];

    for (const product of products) {
        await dbRun("INSERT INTO products (name, description, picture, price) VALUES (?, ?, ?, ?)", [product.name, product.description, product.picture, product.price]);
    }
};

function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { db, dbQuery, dbRun, initializeDB };