let fs = require('fs');

let {login,getUser} = require('./content/login');
let register = require('./content/register');
let upload = require('./content/upload');
let connect = require('./content/connect');
let getVideo = require('./content/getVideo');
let userVideo = require('./content/userVideo');

module.exports = {
    login,
    getUser,
    register,
    upload,
    connect,
    getVideo,
    userVideo
}