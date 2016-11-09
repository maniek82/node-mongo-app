const {SHA256 } = require("crypto-js");
//zaintalowala bibioteka jsonwebtoken
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var password = '123abc';
bcrypt.genSalt(10,(err,salt)=> {
    bcrypt.hash(password,salt,(err,hash) => {
        console.log(hash);
    });
});


var pass = 'maniek';
bcrypt.genSalt(10,(err,salt)=> {
    bcrypt.hash(pass,salt,(err,hash)=> {
        console.log(hash);
    })
})

// var hashedPassword = '$2a$10$rfJc260OuQKadj7ylz0xOOabAlET/1uzYh0/ygi5NOctYtnnTBWv6';
// bcrypt.compare(password,hashedPassword,(err,res)=> {
//     console.log(res);
// });

// var data = {
//     d: 10
// };

// var token = jwt.sign(data,'123abc');
// console.log(token);

// var decoded = jwt.verify(token,'123abc');

// console.log('decoded ', decoded);


// var message = 'I am user number 3';

// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);


// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// //update tokento trick
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

// if(resultHash ===token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed.');
// }







