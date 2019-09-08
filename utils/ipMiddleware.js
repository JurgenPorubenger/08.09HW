const fs = require("fs");
const ip = require('ip');
let a;
let obj = {};


module.exports.ipUserCounter = function (req, res, next) {
    a = 0;
    let ipAddress= ip.address();
    obj[a]=ipAddress;
    //
    for (let key in obj) {
        if(obj[key]!==ipAddress) {
            a++;
            console.log(obj);
            fs.writeFile('./usersIP.txt', obj, (err) => {
                if (err) throw err;
                console.log(a);
                });
        }
        else {
            fs.writeFile('./usersIP.txt', JSON.stringify(obj), (err) => {
                if (err) throw err;
                console.log(a);
            });
        }
    }
    // let fileUsersIp = fs.appendFile('usersIP.txt', `${a}: ${req.ip.split(':').pop()}, `, (err)=> {

    next();
};