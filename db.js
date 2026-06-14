const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./users.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("✅ SQLite Connected");

    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        dob TEXT NOT NULL,
        password TEXT NOT NULL,
        question1 TEXT NOT NULL,
        answer1 TEXT NOT NULL,
        question2 TEXT NOT NULL,
        answer2 TEXT NOT NULL,
        password_change_date TEXT NOT NULL
      )
    `);
  }
});

module.exports = { db };