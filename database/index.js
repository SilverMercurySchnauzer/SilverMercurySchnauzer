const bcrypt = require('bcrypt');
const saltRounds = 10;
require('dotenv').config();
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
 ssl: true// == process.env.SSL
});


exports.selectAll = callback => {
  pool.query('SELECT * FROM items', (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

exports.saveUser = (username, password, callback) => {
  bcrypt.hash(password, saltRounds, function (err, hash) {
    const queryString = `INSERT INTO users (username, password) values ($1, $2)`;
    pool.query(queryString, [username, hash], (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    })
  });
}

exports.validateUser = (loginName, loginPassword, callback) => {
  const queryString = `select * from users where (username) like ($1)`;
    pool.query(queryString, [loginName], (err, results) => {
      const hash = results.rows[0] ? results.rows[0].password : '';
      bcrypt.compare(loginPassword, hash, (err, result) => {
        const userIdUsernamePassword = results.rows[0];
        if (err) {
          callback(err, null);
        } else {
          if (!result) {
            callback(null, 'Wrong Password')
          } else {
            callback(null, userIdUsernamePassword);
          }
        }
      });
    });
};
    
exports.savePost = (userId, text, mediaUrl, date, callback) => {
  console.log('args for save post-->', userId, post, mediaUrl, date);
  const queryString = `INSERT INTO posts (user_id, text, media_url, post_date) values ($1, $2, $3, $4)`;
  pool.query(queryString, [userId, text, mediaUrl, date], (err, results) => {
   console.log('results after saving in DB-->', results);
    if (err) {
      callback(err, null)
    } else {
      callback(null, results)
    }
  })
}
  


