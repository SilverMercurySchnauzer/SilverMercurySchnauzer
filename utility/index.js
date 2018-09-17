let tweetFields = [ 
  'created_at', 
  'id', 
  'id_str', 
  'text', 
  // 'in_reply_to_status_id', 
  // 'in_reply_to_status_id_str', 
  // 'in_reply_to_user_id', 
  // 'in_reply_to_user_id_str', 
  // 'in_reply_to_screen_name', 
  'user',
  'extended_tweet',
  'extended_tweet.full_text',
  // 'user.id', 
  // 'user.id_str', 
  // 'user.name', 
  // 'user.screen_name', 
  'quote_count', 
  'reply_count', 
  'retweet_count',
  'favorite_count', 
  'entities' ];

function scrapeObj (fieldNames, inputObj) {
  let outputObj = {};
  // console.log(inputObj);
  for (let i = 0; i < fieldNames.length; i++) {
    if(fieldNames[i] in inputObj) {
      outputObj[fieldNames[i]] = inputObj[fieldNames[i]];
    }
  }
  return outputObj;
}

function scrapeArr (fieldNames, inputArr) {
  let outputArr = [];
  for (let j = 0; j < inputArr.length; j++) {
    outputArr.push(scrapeObj(fieldNames, inputArr[j]))
  }
  return outputArr;
}

module.exports = {
  tweetFields: tweetFields,
  scrapeObj: scrapeObj,
  scrapeArr: scrapeArr
}