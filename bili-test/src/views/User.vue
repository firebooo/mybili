<template>
    <div>
        <err-nav>
            <template v-slot:none>
                <div></div>
            </template>
        </err-nav>
        <div class="bg">
            <div class="box">
                <div class="head"><img src="@/assets/img/user/noface.jpg" alt=""></div>
                <div class="basic">
                    <div class="name">
                        {{name}}
                    </div>
                    <div class="edit">
                        <span class="sign">{{(sign == '')?'编辑个性签名':sign}}</span>
                        <input type="text" class="space-input" @click="show" ref="input" @blur="hide" v-model="newSign" maxlength="80" v-if="isSelf">
                    </div>
                </div>
            </div>
        </div>
        <div class="banner">
            <div class="tab-links">
                <router-link :to="'/user/' + id + '/zhuye'" class="btn"><span class="iconfont icon-ic_home"></span><span class="txt">主页</span></router-link>
                <router-link :to="'/user/' + id + '/dongtai'" class="btn"><span class="iconfont icon-ic_following"></span><span class="txt">动态</span></router-link>
                <router-link :to="'/user/' + id + '/tougao'" class="btn"><span class="iconfont icon-ic_video"></span><span class="txt">投稿</span></router-link>
                <router-link :to="'/user/' + id + '/pindao'" class="btn"><span class="iconfont icon-ic_channel"></span><span class="txt">频道</span></router-link>
                <!-- <a href="" class="btn"><span class="iconfont icon-ic_collect"></span><span class="txt">收藏</span></a>
                <a href="" class="btn"><span class="iconfont icon-ic_sub"></span><span class="txt">订阅</span></a>
                <a href="" class="btn"><span class="iconfont icon-ic_setting"></span><span class="txt">设置</span></a>      -->
            </div>
            <div class="tab-search">
                <input type="text" placeholder="搜索视频" class="space-input"/>
                <span class="bilifont bili-icon_dingdao_sousuo nav-search-submit"></span>
            </div>
            
        </div>
        <!-- {{$route.params.id}} -->
        <div class="temp">
                <router-view/>
        </div>
    </div> 
</template>
<style lang="scss" scoped>

    .bg{
        width:1101px;
        height: 200px;
        position:relative;
        margin:0 auto;
        z-index: 100;
        background-image:url(../assets/img/user/normal.jpg);
        top:-140px;
        .box{
            width:1081px;
            height: 84px;
            position:absolute;
            bottom:0;
            margin-left: 20px;
            padding-bottom: 16px;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;    
            .head{
                width:64px;
                height: 64px;
                
                img{
                    border-radius:50%;
                    width: 100%;
                    height: auto;
                }
            }
            .basic{
                margin-left:20px;
                .name{
                    color:#fff;
                    font-size:25px;
                    font-weight: 700;
                }
                .edit{
                    padding-top:10px;
                    .sign{
                        position:relative;
                        z-index:-2;
                    }
                    .space-input{
                    background: transparent;
                    border-radius: 4px;
                    border: none;
                    box-shadow: none;
                    color: darkgrey;
                    font-size: 12px;
                    font-family: Microsoft Yahei;
                    line-height: 26px;
                    height: 26px;
                    left:-80px;
                    padding: 0 5px;
                    position: relative;
                    top: -1px;
                    width: 740px;
                    z-index:10;
                    &:hover{
                        background-color:rgba(255,255,255,0.3);
                        border:1px solid rgba(255,255,255,0.3);
                    }
                }
                }
                
            }    
        }
       
        
    }
     .banner{
            width: 1101px;
            height:66px;
            margin:10px auto;
            position:relative;
            top:-140px;
            display:flex;
            flex-flow:row nowrap;
            .tab-links{
                width:498px;
                height: 68px;
                .btn{
                    width:50px;
                    height: 36px;
                    display: inline-block;
                    margin:10px;
                    &:hover{
                        border-bottom:2px solid #00a1d6;
                    }
                    .iconfont{
                    display: inline-block;
                    width: 20px;
                    font-size: 20px;
                    margin-right: 4px;
                    vertical-align: middle;
                    color: #00c091;
                }
                .icon-ic_following{
                    color: #fb7299;
                }
                .icon-ic_video{
                    color: #02b5da;
                }
                .icon-ic_channel{
                    color: #23c9ed;
                }
                .icon-ic_collect{
                    color: #f3a034;
                }
                .icon-ic_sub{
                    color: #ff5d47;
                }
                .icon-ic_setting{
                    color: #23c9ed;
                }
                }
                
            }
            .tab-search{
                position: relative;
                display: inline-block;
                width: 100px;
                height: 30px;
                vertical-align: middle;
                top:8px;
                .space-input{
                    position: absolute;
                    height: 30px;
                    width: 100px;
                    padding: 0 29px 0 10px;
                    line-height: 30px;
                    color: #222;
                    font-size: 12px;
                    border: 1px solid #ccd0d7;
                    border-radius: 15px;
                    box-shadow: none;
                    box-sizing: border-box; 
                }
                .bili-icon_dingdao_sousuo{
                    position:relative;
                    left:75px;
                    top:5px;
                    cursor:pointer;
                    color:#ccd0d7;
                    &:hover{
                        color:aqua;
                    }
                }
            }
        }
        .temp{
            position:relative;
            top:-150px;
            width:700px;
            height: 431.6px;
            left:140px;
        }
</style>
<script>
import { Vue,Options } from "vue-class-component";
import errNav from "@/components/header/errNav.vue";

@Options({
    data(){
        return{
            id:'',
            sign:'',
            newSign:'',
            info:[],
            isSelf:false,
            name:''
        }
    },
    created(){
        
        this.$axios.get('http://localhost:3000/login',{params:{id:this.$route.params.id}}).then((res)=>{
            if(res.data.result.name === this.$cookies.get("name")){
                    this.isSelf = true;
            }else{
                this.$cookies.set("author",res.data.result.name,60*60*24);
                this.$cookies.set('aid',res.data.result.id,60*60*24);
            }
            console.log(res);
            if(res.data.status === "yes"){
                console.log(res.data.result);
                document.title = res.data.result.name + "的个人空间";
                this.sign = res.data.result.sign;
                this.id = res.data.result.id;
                this.name = res.data.result.name;
            }
        }).catch((err)=>{
            if(err){
                this.$router.push({path:'/404'});
            }
            console.log(err);
        })
    },
    components:{
        errNav,
    },
    methods:{
        show(){
            this.$refs.input.style.background = "#fff";
        },
        hide(){
            this.$refs.input.style.background = "rgba(255,255,255,0)";
            this.$refs.input.style.color = "rgba(255,255,255,0)";
            this.$refs.input.value = '';
        }
    }
})

export default class User extends Vue{
    
}
</script>