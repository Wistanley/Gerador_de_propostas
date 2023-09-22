const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '151.106.110.3',
  user: 'u766932176_kyodoadm',
  password: 'Kyodo2209',
  database: 'u766932176_console'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar com o banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados com o ID ' + connection.threadId);
});

module.exports = connection;
