<template>
    <div id = "navbar">
        <div class="nav-link">
            <ul class="nav-link-ul">
                <li class="nav-link-item"><a href="#" class="link"><i class="bilifont bili-icon_dingdao_zhuzhan"></i>主站</a></li>
                <li class="nav-link-item"><a href="#" class="link">番剧</a></li>
                <li class="nav-link-item"><a href="#" class="link">游戏中心</a></li>
                <li class="nav-link-item"><a href="#" class="link">直播</a></li>
                <li class="nav-link-item"><a href="#" class="link">会员购</a></li>
                <li class="nav-link-item"><a href="#" class="link">漫画</a></li>
                <li class="nav-link-item"><a href="#" class="link">赛事</a></li>
                <li class="nav-link-item"><a href="#" class="link">BML</a></li>
                <li class="nav-link-item"><a href="#" class="link">周年庆</a></li>
                <li class="nav-link-item"><a href="#" class="link"><i class="bilifont bili-icon_dingdao_xiazaiapp"></i>下载APP</a></li>
            </ul>         
        </div>
        <div class="nav-search-box">
            <div class="nav-search"><form id="nav_searchform"><input type="text" autocomplete="off" accesskey="s" x-webkit-speech="" x-webkit-grammar="builtin:translate" placeholder="一张工资单竟隐藏这么大的秘密？" class="nav-search-keyword" @focus="showBox" @blur="hideBox" v-model="text"><div class="nav-search-btn" @click="search"><button type="button" class="bilifont bili-icon_dingdao_sousuo nav-search-submit"></button></div></form><!----><!----></div>
            <ul class="search-box" v-show="isFocus">

            </ul>
        </div>
        <div class="nav-user-center">
            <div class="user-con signin">
                <div class="item user unlogin"><a href="/login" v-show = "!isSelf">登录</a><a :href="'/user/' + url" v-show="isSelf"><img src="@/assets/img/user/noface.jpg" alt=""></a></div>
                <div class="item"><a href="#">大会员</a></div>
                <div class="item"><a href="#">消息</a></div>
                <div class="item"><a href="#">动态</a></div>
                <div class="item"><a href="#">收藏</a></div>
                <div class="item"><a href="#">历史</a></div>
                <div class="item"><a href="#">创作中心</a></div>   
                <router-link class="btn" tag="button" to="/upload">投稿</router-link>
            </div>
        </div>
        <slot></slot>
    </div>
    
</template>
<script lang = "ts">
    import {Options,Vue} from 'vue-class-component';
    @Options({
        data(){
            return{
                text:'',
                isFocus:false,
                isSelf:false,
                url:''
            }
        },
        methods:{
            showBox(){
                this.isFocus = true;
            },
            hideBox(){
                this.isFocus = false;
            },
            search(){
                let datalength = localStorage.length;
                let i;
                localStorage.removeItem('loglevel:webpack-dev-server');
                if(datalength + 1 <= 10){
                    localStorage['item' + (localStorage.length + 1)]=this.text;
                }
                if(datalength + 1 > 10){
                    for(i = 1;i<datalength;i++){
                        localStorage['item' + i] = localStorage['item' + (i + 1)];
                    }
                    localStorage['item' + (i-1)] = this.text;
                }
                this.$router.push({path:'/search',query:{keyword:this.text}});
            }
        },
        created(){
            if(this.$cookies.get('name')){
                this.isSelf = true;
                this.url = this.$cookies.get('uid');
                if(this.$cookies.get('name') === this.$cookies.get('author')){
                    this.url = this.$cookies.get('aid');
                }
            }
        }
    })
    export default class Nav extends Vue{
        
    }
</script>
<style lang="scss" scoped>
    $fontColor:#fff;
    $fontSize:14px;
    #navbar{
        width:100%;
        position: absolute;
        z-index:1;
        color: $fontColor;
        display:flex;
        justify-content:space-around;
        padding:10px;
        font-size:$fontSize;
        .nav-search-box{
             flex-grow:1;
             #nav_searchform{
                display:flex;
                position:relative;
                .nav-search-keyword{
                   overflow: hidden;
                   width: 100%;
                   height: 34px;
                   border: none;
                   padding:20px;
                   box-shadow: none;
                   color: #999;
                   font-size: 14px;
                   line-height: 34px;
                   transition: all .2s;
                }
                .nav-search-btn{
                    position: absolute;
                    top: 0;
                    right: 0;
                    margin: 0;
                    padding: 0;
                    width: 48px;                    
                    border-radius: 2px;
                    background: #e7e7e7;
                    line-height: 26px;
                    
                    .nav-search-submit{
                        width: 100%;
                        height: 40px;
                        border: none;
                        cursor: pointer;
                        &:hover{
                            color:aquamarine;
                        }
                    }
                }
             }
             .search-box{
                 position: absolute;
                 width: 357px;
                 border: 1px solid #e5e9ef;
                 margin-top: 1px;
                 background: #fff;
                 z-index: 99999;
                 border-radius: 2px;
                 box-shadow: 0 2px 4px rgba(0,0,0,.16);
                 padding: 10px 0;
                 font-size: 14px;
             }
        }
        .nav-user-center{
            .unlogin{
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    line-height: 36px;
                    font-size: 14px;
                    letter-spacing: 0;
                    background: #f6f6f6;
                    font-weight: 600;
                    a{
                        color:#00a1d6;
                        text-align: center;
                        img{
                            width:40px;
                            height: 40px;
                            border-radius:50%;
                        }
                    }
            }
        }
        .btn{
            cursor: pointer;
            position: relative;
            font-size: 14px;
            display: inline-block;
            width: 100px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            background: #fb7299;
            border-radius: 2px;
            margin-left: 14px;
            border:0px;
            color:$fontColor;
        }
        div.item a{
            color:#fff;
        }
    }
</style>