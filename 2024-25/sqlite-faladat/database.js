import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initializeDB = async () => {
    await dbRun("DROP TABLE users");
    await dbRun("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, email TEXT, varos TEXT)");

    const users = [
        {firstname: "John ", lastname: "Doe", email: "john.doe@example.com", varos:"Szeged"},
        {firstname: "John ", lastname: "Pork", email: "pork.jhon@example.com", varos:"Dunaujvaros"},
        {firstname: "Kondenzátor ", lastname: "Karcsi", email: "KKarcsi@gmail.com", varos:"Szolnok"},
    ];

    for (const user of users) {
        await dbRun("INSERT INTO users (firstname, lastname, email, varos) VALUES (?, ?, ?,?)", [user.firstname,user.lastname, user.email, user.varos]);
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