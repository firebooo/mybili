let formidable = require('formidable');
let fs = require('fs');
let path = require('path');
let rename = require('./rename');

function addSearch(url,d,f){
    let obj = {},arr;
    obj.url = d;
    for(let item in f){
        obj[item] = f[item];
    }
    fs.readFile(url,(err,data)=>{
        if(err){
            console.log(err);
        }

        arr = JSON.parse(data);
        let id = Number(arr[arr.length - 1].id) + 1;
        id = (id + '').padStart(10,'0');
        obj.id = id;
        obj.uid = f.uid;
        console.log(obj);
        arr.push(obj);
        fs.writeFile(url,JSON.stringify(arr),(err)=>{
            if(err){
                console.log(err);
            }
            console.log("添加搜索记录成功")
        })
    })
}

function addUserInfo(url,d,f){
    fs.readFile(url,(err,data)=>{
        if(err){
            console.log(err);
        }
        let arr;
        arr = JSON.parse(data);
        console.log(arr);
        console.log(typeof arr);
        console.log('----arr----');
        for(let i = 0;i<arr.length;i++){
            if(arr[i].id === f.uid){
                //这里的video是字符串类型，需要再次使用JSON.parse将其转化为数组，再将文件名添加到video数组中然后上传
                let video = [];
                console.log(typeof arr[i].video);
                if(typeof arr[i].video !== "object"){
                    video = JSON.parse(arr[i].video);
                }
                video = arr[i].video;
                video.push(d);
                arr[i].video = video;
                console.log(arr[i].video);
                // arr[i].video.push(d);
            }
        }
        fs.writeFile(url,JSON.stringify(arr),(err)=>{
            if(err){
                console.log('添加用户视频记录失败');
            }
            console.log('添加用户视频记录成功')
        })
    })
}

function upload(req,res){
     //创建form表单解析对象
    const form = new formidable.IncomingForm();
    //设置文件保存的路径
    const path = './assets/video/';
    //获取该路径下所有文件及文件夹的列表
    const files = fs.readdirSync(path);
    //过滤出目录类型
    const isDir = files.filter((item)=>{
        let dir = fs.statSync(path+item);
        return dir.isDirectory();
    })
    //保存文件信息
    const items = [];
    //保存表单信息
    const data = [];
    isDir.sort((a,b)=>{
        return a - b;
    })
    console.log(files);
    console.log(isDir);
    const lastDir = isDir[isDir.length-1];
    // console.log(lastDir.match(/\d{10}/g));
    const lastNum = Number(lastDir.match(/\d{10}/g)) + 1;
    //新文件夹的文件名称
    const dirName = 'BV' + (lastNum + '').padStart(10,'0');
    console.log(lastNum);
    console.log(dirName);
    let newPath = path + dirName + '/';

    fs.mkdir(newPath,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("文件夹新建成功")
        }
    })

    //设置文件上传的位置
    // form.uploadDir = path.join(__dirname,'video');
    form.uploadDir = newPath;
    //设置多文件上传
    form.multiples=true;
    // console.log(path.join(__dirname,'video'))
    //设置文件是否保留后缀名
    form.keepExtensions = false;
    //文件多项上传，获取文件信息
    form.on('file',(field,file)=>{
        items.push([field,file]);
    })
    //获取文本数据等信息
    form.on('field',(name,value)=>{
        data.push(value);
    })
    //解析form表单对象
    form.parse(req,(err,fields,files)=>{
        console.log('---------');
        // console.log('fields:');
        console.log(fields);
        // console.log(data);
        // console.log('--------');
        // console.log('files:')
        // console.log(files);
        // console.log('--------');
        // console.log(files.video);
        //打印一个二维数组
        console.log(items);
        console.log('--------');
        //通过item[0][1].path，获取到上传的路径以及文件名
        let voldPath = items[0][1].path;
        let vnewPath = newPath + 'video_' + 1;
        let poldPath = items[1][1].path;
        // let pnewPath = path + 'upload_' + 1 + '.jpg';
        let pnewPath = newPath + 'photo';
        //修改文件名
        rename(voldPath,vnewPath);
        rename(poldPath,pnewPath);
        console.log(items[0][1].path);
        addUserInfo('./assets/json/user.json',dirName,fields);
        addSearch('./assets/json/search.json',dirName,fields);
        res.send({status:"ok"});
    })
}

module.exports = upload;