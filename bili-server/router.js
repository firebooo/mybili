const express = require('express');
const fs = require('fs');


const router = express.Router();

const options = require('./options');

router.all('*',(req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
})

router.get('/login',options.getUser);

router.post('/login',options.login);

router.post('/register',options.register);

router.post('/upload',options.upload);

router.get('/connect',options.connect);

router.get('/getVideo',options.getVideo);

router.post('/userVideo',options.userVideo);

module.exports = router;