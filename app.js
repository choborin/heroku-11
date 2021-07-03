const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'choborin_mysql',
  user: 'choborin',
  password: 'beckham7',
  database: 'chobodb'
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

