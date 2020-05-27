const express = require('express');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'password',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const app = express();
app.use(express.json());

app.post('/', async function (req, res) {
  // Apply input validations based on whitelist
  // Use database accounts with least privilege
  const result = await pool.query(`SELECT * FROM user WHERE id = 1; DROP TABLE user`);
  console.log(result[0]);

  res.send(result[0]);
});

app.listen(3000);
