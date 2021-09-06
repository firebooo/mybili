let writeFile = require('./writeFile');
let readFile = require('./readFile');

function register(req, res){
    if (JSON.stringify(req.body) != '{}' && req.body.name != undefined && req.body.password != undefined) {
        readFile('./assets/json/user.json',(err,data)=>{
            let {name,password} = req.body;
            if(err){
                console.log(err);
                res.status(500).send('Server Error');
            }else{
                let obj = JSON.parse(data);
                let isRegisted = obj.every((item)=>item.name!=name);
                if(isRegisted){
                    let newObj = {};
                    let id = Number(obj[obj.length - 1].id) + 1;
                    newObj.id = (id + '').padStart(9,'0');
                    newObj.name = name;
                    newObj.password = password;
                    newObj.sign = '';
                    newObj.video = [];
                    newObj.history = [{url:'',page:1,delay:1,time:new Date().toLocaleString()}]
                    newObj.birth = '' + (new Date().getMonth()+1) + '-' + new Date().getDate();;
                    obj.push(newObj);
                    let newData = JSON.stringify(obj);
                    writeFile('./assets/json/user.json',newData,(err)=>{
                        if(err){
                            res.status(500).send('Server Error');
                        }else{
                            res.send({status:"success",name:newObj.name,id:newObj.id});
                        }
                    })
                }else{
                    res.send({status:"failed"});
                }

            }
        })
    }
}

module.exports = register;