let readFile = require('./readFile');
let qs = require('querystring');

function login(req,res){
    console.log(req.body)
    console.log(typeof req.body);
    let {name,password} = req.body;
    if(name === "admin" && password === "admin"){
        res.send({status:"admin"});
    }else{
        readFile('./assets/json/user.json',(err,data)=>{
            if(!err){
                const arr = JSON.parse(data);
                for(let item of arr){
                    if(item.name===name&&item.password===password){
                        res.send({status:"success",name,id:item.id})
                    }
                    else{
                        res.send({status:"no"});
                    }
                }
                // const isLogin = arr.some((item)=>item.name===name&&item.password===password);
                // if(isLogin){
                //     console.log(req.cookies.name);
                //     console.log(req.session.name);
                //     res.send({status:"success",name})
                // }else{
                //     res.send({status:'no'});
                // }
            }
        })
    }
}

function getUser(req,res){
    let id = qs.parse(req.url);
    // console.log(id);
    // console.log(id["/login?id"]);
    readFile('./assets/json/user.json',(err,data)=>{
        if(err){
            console.log(err);
            res.send({status:"no"});
        }
        const arr = JSON.parse(data);
        const userInfo = arr.filter((item)=>item.id == id["/login?id"]);
        console.log(userInfo);
        let obj = {},info = [];
        if(userInfo.length){
            obj.id = userInfo[0].id;
            obj.name = userInfo[0].name;
            obj.sign = userInfo[0].sign;
            obj.video = userInfo[0].video;
        }


        res.send({result:obj,status:"yes"});
    })
}

function getInfo(url,obj,res){

}

module.exports = {login,getUser};