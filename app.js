const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'b8220a503bdb55',
  password: '1edf7fa8',
  database: 'heroku_2a57bf75d9bde8c'
});

app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('index.ejs');
    }
  );
});

app.listen(3000);
console.log('Server start!');

