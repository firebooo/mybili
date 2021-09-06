<template>
    <div>
        <div class="header">
            <span class="title">TA的视频</span>
            <span :class="(num==1) ? type1:type2" @click="change(1)">最新发布</span>
            <span :class="(num==2) ? type1:type2" @click="change(2)">最多播放</span>
            <span :class="(num==3) ? type1:type2" @click="change(3)">最多收藏</span>
        </div>
        <div class="con">
            <div class="item" v-for="item in data" :key="item.id">
                <div class = "img"><a :href="'/video/'+item.url"><img :src="'http://localhost:3000/video/'+item.url+'/photo'" alt="图片找不到了哈~"></a></div>
                <div class="info">
                    <i class="bilifont bili-icon_shipin_bofangshu"></i>{{playNum}}{{item.title}}{{item.time}}
                </div>
                
            </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .header{
        display:flex;
        flex-flow:row wrap;
        align-content:space-around;
        .title{
            font-size: 20px;
            margin-right: 20px;
        }
        .new{
            padding: 0 20px;
            cursor:pointer;
        }
        .selected{
            color:aquamarine;
            border-bottom:2px solid aquamarine;
        }
    }
    .con{
        display:flex;
        flex-flow:row wrap;
        justify-content: flex-start;
        margin-top:20px;
        .item{
            width:170px;
            height: 184px;
            margin:5px;
            .img{
                width:170px;
                height: 100px;
                background-image:url(../../assets/img/normal/video-placeholder.png) 50%;
                background-size:cover;
                img{
                    width:170px;
                    height: 100px;
                }
            }
            .info{
                width:100%;
                height: 84px;
            }
        }
    }
</style>
<script>
import { Vue,Options } from "vue-class-component";

@Options({
    data(){
        return{
            num:1,
            type1:['selected','new'],
            type2:['new'],
            data:[],
            playNum:Math.floor(Math.random()*10000),
        }
    },
    methods:{
        change(n){
            this.num = n;
        }
    },
    created(){
        this.$axios.get('http://localhost:3000/login',{params:{id:this.$route.params.id}}).then((res)=>{
            console.log(res);
            if(res.data.status === "yes"){
                let videoList = [];
                console.log(res.data.result);
                document.title = res.data.result.name + "的个人空间";
                this.sign = res.data.result.sign;
                videoList = res.data.result.video;
            this.$axios.post('http://localhost:3000/userVideo',{list:videoList}).then((res)=>{
                console.log(res);
                console.log(res.data.result);
                this.data = res.data.result;
                }).then((err)=>{
                if(err){
                 console.log(err)
            }
        })
            }else{
                this.$router.push({path:'/404'});
            }
        }).catch((err)=>{
            if(err){
                this.$router.push({path:'/404'});
            }
            console.log(err);
        })
    }
})

export default class Zhuye extends Vue{
    
}
</script>