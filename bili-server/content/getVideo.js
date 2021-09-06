let readFile = require('./readFile');
let qs = require('querystring');

function getVideo(req,res){
    let u = qs.parse(req.url);
    // console.log(u);
    readFile('./assets/json/search.json',(err,data)=>{
        let arr = JSON.parse(data);
        let video = arr.filter((item)=>item.url == u['/getVideo?id']);
        if(video.length){
            res.send({status:"success",result:video});
        }else{
            res.send({status:"no"});
        }
    })
}

module.exports = getVideo;