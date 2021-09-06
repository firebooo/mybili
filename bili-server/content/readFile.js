let fs = require('fs');

function readFile(url,callback){
    fs.readFile(url,(err,data)=>{
        callback(err,data);
    })
}

module.exports = readFile;