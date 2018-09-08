// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'FILL_ME_IN',
//   database : 'test'
// });

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true == process.env.SSL
});



const selectAll = callback => {
  pool.query('SELECT * FROM items', (err, results, fields) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
