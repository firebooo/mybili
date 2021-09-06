<template>
    <div id="wrap">
        <div class="primary-menu-itnl">
            <div id="primaryPageTab">
                <ul class="con">
                    <li>
                        <a href="#">
                            <div class="round"><i class="bilifont bili-icon_fenqudaohang_shouye"></i><span>首页</span></div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="round yel"><i class="bilifont bili-icon_dingdao_dongtai"></i><span>动态</span></div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="round orange"><i class="bilifont bili-remen"></i><span>热门</span></div>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="round chanel"><i class="bilifont bili-pindao"></i><span>频道</span></div>
                        </a>
                    </li>
                </ul> 
            </div>
            
            <div id="primaryChannelMenu">
                <div>动画<span class="count">999+</span></div>
                <div>音乐<span class="count">999+</span></div>
                <div>舞蹈<span class="count">999+</span></div>
                <div>知识<span class="count">999+</span></div>
                <div>生活<span class="count">999+</span></div>
                <div>时尚<span class="count">999+</span></div>
                <div>娱乐<span class="count">999+</span></div>
                <div>放映厅<span class="count">29</span></div>
                <div>番剧<span class="count">999+</span></div>
                <div>国创<span class="count">999+</span></div>
                <div>游戏<span class="count">999+</span></div>
                <div>科技<span class="count">999+</span></div>
                <div>鬼畜<span class="count">999+</span></div>
                <div>资讯<span class="count">999+</span></div>
                <div>影视<span class="count">999+</span></div>
                <div>更多<i class ="bilifont bili-icon_caozuo_xiangyou-copy"></i></div>
            </div> 
 
            <div id="primaryFriendshipLink">
                <div><img src="@/assets/svg/zhuanlan.svg" alt=""><span>专栏</span></div>
                <div><img src="@/assets/svg/huodong.svg" alt=""><span>活动</span></div>
                <div><img src="@/assets/svg/xiaoheiwu.svg" alt=""><span>小黑屋</span></div>
                <div><img src="@/assets/svg/zhibo.svg" alt=""><span>直播</span></div>
                <div><img src="@/assets/svg/ketang.svg" alt=""><span>课堂</span></div>
                <div><img src="@/assets/svg/xinge.svg" alt=""><span>新歌热榜</span></div>
            </div>
        </div>
    </div>          
</template>

<script lang = "ts">
import {Options,Vue} from 'vue-class-component';
@Options({

})
export default class Bwrap extends Vue{
    
}
</script>
<style lang = "scss" scoped>
        div#wrap{
            margin:0 auto;
            height: 108px;
            display:flex;
            justify-content: space-between;
            .con{
                display: flex;
                padding-bottom: 20px;
                li{
                    width:50px!important;
                }
                li .bilifont{
                    color:#fff;
                    font-size:28px;
                }
                .round{
                    position: relative;
                    width: 36px;
                    height: 36px;
                    background: #ff5c7c;
                    border-radius: 36px;
                    line-height: 36px;
                    text-align: center;
                    margin: 0 auto 4px;
                }
                .round span{
                    font-size: 14px;
                }
                .yel{
                    background: #fcba2a;
                }
                .orange{
                    background: #ff716d;
                }
                .chanel{
                    background: #6dc781;
                }
            }
            #primaryChannelMenu{
                display:flex;
                flex-flow:row wrap;
                width:557px;
                justify-content:space-around;
                padding-top:20px;
                font-family:"微软雅黑";
                
                div{
                    width:67px;
                    height:34px;
                    cursor:pointer;
                    font-weight:500;
                    font-size:14px;
                    &:hover{
                        color:#73c9e5;
                    }
                    .count{
                    font-size:12px;
                    display: inline-block;
                    background: #73c9e5;
                    border-radius: 2px;
                    color: #fff;
                    margin-left: 1px;
                    transform: scale(.85);
                    width: 32px;
                    text-align: center;
                    }
                }
                
            }
            #primaryFriendshipLink{
                display:flex;
                flex-flow:row wrap;
                width:222px;
                height: 70px;
                div{
                    display: flex;
                    align-items:center;
                    width:74px;
                    height: 34px;
                    cursor:pointer;
                    &:hover{
                        color:aquamarine;
                    }
                    span{
                        font-size: 14px;
                        font-weight:400;
                        font-family:"Microsoft YaHei";
                        padding-bottom:5px;
                    }
                    img{
                        width:25px;
                        height: 25px;
                    }
                }
                
            }
        }
        @media only screen and (min-width:1349px){
            div#wrap{
                width:999px;
                /* background-color:red; */
            }
        }
        @media  only screen and (min-width:1654px){
            div#wrap{
                width:1190px;
                /* background-color:blue; */
            }
        }
        @media only screen and (min-width:1870px){
            div#wrap{
                width:1414px;
                /* background-color:yellow; */
            }
        }
        
</style>