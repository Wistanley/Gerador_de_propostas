const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Em um cenário real, você deve usar hashes para verificar senhas
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(query, [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao consultar o banco de dados' });
    }
    if (results.length > 0) {
      // Usuário autenticado com sucesso
      return res.status(200).json({ message: 'Usuário autenticado com sucesso' });
    } else {
      // Autenticação falhou
      return res.status(401).json({ error: 'Usuário ou senha incorretos' });
    }
  });
});

module.exports = router;
