const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "teste", // coloque sua senha
  database: "crud_node",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL conectado!");
});

module.exports = db;
