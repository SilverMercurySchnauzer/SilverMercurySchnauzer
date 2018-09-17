const db = require('../database/index');
const moment = require('moment');

exports.publishTweets = () => db.selectAll((err, results, fields) => {
  if (err) {
    console.log('err fetching posts');
  } else if (results.rows.length) {
   //compare the post date with current data/time 
    const fifteenMinsAgo = moment().subtract(15, 'minutes');
    results = results.rows.filter(t => moment(t.post_date, 'YYYY-MM-DDTHH:mm:ss').isAfter(fifteenMinsAgo));
    console.log('posts are ready to be published-->', results)
    //publish array of tweets in results
  }
});