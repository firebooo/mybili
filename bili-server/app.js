let express = require('express');

let formidable = require('formidable');

let bodyParser = require('body-parser');

let cookie = require('cookie-parser');

let session = require('express-session');

let routes = require('./router');

let app = express();

app.use('/json',express.static('./assets/json/'))
app.use('/public',express.static('./public/'))
app.use('/user',express.static('./assets/user/'))
app.use('/home',express.static('./assets/home/'))
app.use('/views/',express.static('./views/'))
app.use('/video/',express.static('./assets/video/'))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(cookie());

app.use(session({
    secret:'hello',
    resave:false,
    saveUninitialized:false
}))

app.use(routes);

app.listen(3000,()=>{
    console.log('Server at http://localhost:3000');
})