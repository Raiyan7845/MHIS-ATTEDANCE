// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   port: 3308,
//   database: 'attendance_management'
// });

// connection.connect((err) => {
//   if (err) {
//       console.log('Error connecting to Db');
//       return;
//   }
//   console.log('Connection established');
// });

// module.exports= connection;

var mysql = require('mysql');
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to Db:', err.message);
    return;
  }
  console.log('Connection established');
});

module.exports = connection;
