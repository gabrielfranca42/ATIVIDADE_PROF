const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(express.json());
app.use(cors());

// CREATE
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  db.query("INSERT INTO users (name, email) VALUES (?, ?)", [name, email], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Usuário criado!" });
  });
});

// READ
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.json(err);
    res.json(result);
  });
});

// UPDATE
app.put("/users/:id", (req, res) => {
  const { name, email } = req.body;

  db.query(
    "UPDATE users SET name=?, email=? WHERE id=?",
    [name, email, req.params.id],
    (err) => {
      if (err) return res.json(err);
      res.json({ message: "Atualizado!" });
    }
  );
});

// DELETE
app.delete("/users/:id", (req, res) => {
  db.query("DELETE FROM users WHERE id=?", [req.params.id], (err) => {
    if (err) return res.json(err);
    res.json({ message: "Deletado!" });
  });
});

app.listen(3000, () => console.log("API rodando em http://localhost:3000"));
