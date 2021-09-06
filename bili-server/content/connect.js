//判断是否连接到服务器

function connect(req,res,next){
    console.log('connect success');
    res.send({status:"connect"});
}

module.exports = connect;