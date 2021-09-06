const fs = require('fs');

function rename(oldName,newName){
    fs.rename(oldName,newName,(err)=>{
        if(err){
            res.status(500).send({status:"error"});
        }
    })
}

module.exports = rename;