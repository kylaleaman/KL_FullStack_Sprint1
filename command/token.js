const crypto = require('crypto');

//Function to generate token 
    //combining username and time stamps to create unique token
    //use SHA_256 hashing algorithm to generate token
function genToken(username) {
    const uniqueString = `${username}_${Date.now()}`;
    const token = crypto.createHash('sha256').update(uniqueString).digest('hex');
    return token;
}

//Example
const username = 'kleaman';
const token = genToken(username);
console.log('Generated Token:', token);