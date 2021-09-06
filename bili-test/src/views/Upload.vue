<template>
    <div id="header">
        <err-nav>
            <template v-slot:none>
                <div></div>
            </template>
        </err-nav>
    </div>
    <div class="submit">
        <div class="top">
            <div :class="(num==1)?type1:type2" @click="change(1)">视频投稿</div>
            <div :class="(num==2)?type1:type2" @click="change(2)">专栏投稿</div>
            <div :class="(num==3)?type1:type2" @click="change(3)">互动视频投稿</div>
            <div :class="(num==4)?type1:type2" @click="change(4)">音频投稿</div>
            <div :class="(num==5)?type1:type2" @click="change(5)">贴纸投稿</div>
            <div :class="(num==6)?type1:type2" @click="change(6)">视频素材投稿</div>
        </div>
        <div class="form">
                <form method="post" enctype = "multipart/form-data">
            <div class="form-group">
                <label class="exmaple">请选择视频文件</label>
                <input type="file" name="name" id="exmaple1" @click="tip" ref="video">
            </div>
            <div class="form-group">
                <label class="exmaple">请选择视频封面</label>
                <input type="file" name="photo" ref="photo"/>
            </div>
            <div class="form-group">
                <label class="exmaple">请输入视频标题</label>
                <el-input v-model="title" placeholder="请输入视频标题" style="width:500px;"></el-input>
            </div>
            <button type="submit" class="btn" @click.prevent="upload">提交</button>
        </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #header{
        width:100%;
        height: 60px;
    }
    .submit{
        width: 1022px;
        height: 371px;
        overflow: auto;
        margin:0 auto;
        .top{
            width:1022px;
            height: 63px;
            text-align:center;
            line-height: 63px;
            display:flex;
            flex-flow:row nowrap;
            justify-content: space-between;
            .item{
                width:100px;
                height: 63px;
                font-size: 16px;
                cursor:pointer;
            }
            .selected{
                color:aquamarine;
                border-bottom:2px solid aquamarine;
            }
        }
        .btn{
            width:200px;
            height: 40px;
            position:relative;
            top:140px;
            left:300px;
            cursor:pointer;
        }
    }
</style>

<script lang="ts">
import { Vue,Options } from "vue-class-component";
import errNav from "@/components/header/errNav.vue";

@Options({
    data(){
        return{
            num:1,
            type1:['selected','item'],
            type2:['item'],
            title:''
        }
    },
    created(){
        this.$notify({
          title: '注意！',
          dangerouslyUseHTMLString: true,
          message: '<strong>本页面只实现了视频及图片上传功能</strong>'
        });
        // this.$axios.get('http://localhost:3000/assets/json/test.json').then((res)=>{
        //     console.log(res.data);
        // }).catch(function(e){
        //     console.log(e);
        // })
    },
    components:{
        errNav
    },
    methods:{
        change(n){
            this.num = n;
        },
        upload(){
            if(!(this.$cookies.get('name'))){
                this.$alert('上传视频前，请先登录','提示',{
                    confirmButtonText: '确定',
                    callback:()=>{
                        this.$router.push('/login');
                    }
                })
                return;
            }
            if(this.$refs.video.files[0] == undefined || this.$refs.photo.files[0] == undefined || this.title == ''){
                this.$alert('请输入文件，图片，以及标题信息','提示');
                return;
            }
            //获取视频、图片名称
            let videoName = this.$refs.video.files[0].name;
            let picName = this.$refs.photo.files[0].name;
            //正则判断文件名是否符合规范
            let vPattern = /.(mp4|ogg|webm)$/i;
            let pPattern = /(jpe?g|png|gif)$/;
            if(!(vPattern.test(videoName)&&pPattern.test(picName))){
                this.$alert('视频或图片的格式错误','提示');
                return;
            }

            let data = new FormData();
            data.append('video',this.$refs.video.files[0]);
            data.append('photo',this.$refs.photo.files[0]);
            data.append('time',new Date().toLocaleString());
            data.append('title',this.title);
            data.append('author',this.$cookies.get('name'));
            data.append('uid',this.$cookies.get('uid'));
            
            // typescript规范无法将this对象保存在变量中
            // let that = this;
            
            //解决1：使用箭头函数将this指向为vue实例，这样就可以在onload函数中调用element框架的方法了
            // let tip = ()=>{
            //     this.$alert('上传成功','提示');
            // }
            //解决2：将this.$alert方法体保存在变量中，调用该变量就等同于调用框架中的方法
            let clone = this.$alert;
            //解决3:将clone方法通过call，apply，bind间接调用
            
            let xhr = new XMLHttpRequest();
            
            //无法将alert函数添加到xhr实例中,
            // xhr.success = this.$alert;
                xhr.open('post',"http://localhost:3000/upload");
                xhr.send(data);
                xhr.onload = function(){
                    if(xhr.status == 200){
                        console.log(xhr.responseText);
                        let obj = JSON.parse(xhr.responseText)
                        if(obj.status === 'ok'){
                            // this指向xhr，所以无法调用$alert方法
                            // this.$alert('上传成功','提示');
                        //以下三种可以间接调用$alert方法
                        // 1.箭头函数调用   tip();
                        // 2.为值的函数进行调用 clone('上传成功1','提示');
                        // 3.间接调用函数
                        clone.call(this,'上传成功','提示');
                        }
                    }
                        
                }
            // console.log(this.$refs.video.files[0]);
        },
        tip(){
            // this.$alert('如果不上传封面，则会在视频随机选一帧作为封面','提示');
            console.log('下次一定')
        }
    }
})

export default class Upload extends Vue{
    
}
</script>