let fs = require('fs');

function writeFile(url,content,callback){
    fs.writeFile(url,content,(err)=>{
        callback(err);
    })
}

module.exports = writeFile;