let url = require('url');
let qs = require('querystring');
let readFile = require('./readFile');

function userVideo(req,res){
    let name = req.body.list;
    // console.log(name,typeof name);
    let info = [];
    readFile('./assets/json/search.json',(err,data)=>{
            if(err){
                console.log(err);
                res.send({status:"no"});
            }
            const arr = JSON.parse(data);
            for(let i = 0;i<arr.length;i++){
                for(let j = 0;j<name.length;j++){
                    let obj = {}
                    if(name[j] === arr[i].url){
                        obj.url = arr[i].url;
                        obj.title = arr[i].title;
                        obj.time = (arr[i].time).split(' ')[0];
                        obj.author = arr[i].author;
                    }
                    if(!(JSON.stringify(obj)=='{}')){
                        info.push(obj);
                    }
                }
            }
            console.log(info);
            res.send({result:info,status:'success'})
        })
}

module.exports = userVideo;