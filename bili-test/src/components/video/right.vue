<template>
    <div class="r-con">
        <div class="up_info">
            <div class="u-face">
                <a :href="'/user/' + id" class="fa">
                    <img src = "@/assets/img/user/noface.jpg"/>
                </a>
            </div>
            <div class="up_info_right">
                <a class="name" :href="'/user/' + id">{{author}}</a>
            </div>
        </div>
        <div class="dankaku-wrap">
            <el-collapse>
            <el-collapse-item title="弹幕列表" name="1">
                <div class="item">
                    <span class="time">时间</span>
                    <span class="txt">弹幕内容</span>
                    <span class="send">发送时间</span>
                </div>
                <div v-for="item in message" :key="item.id" class="item">
                    <span class="time time1">{{item.time}}</span>
                    <span class="txt txt1">{{item.txt}}</span>
                    <span class="send send1">{{item.send}}</span>
                </div>
            </el-collapse-item>
            </el-collapse>
            
        </div>
        <div id="multi_page">
            <div class="nav"><span>视频选集</span></div>
            <div class="list">
                <a :href="'/video/' + url" class="item">P1 {{title}}</a>    
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .r-con{
        width:320px;
        padding-top:20px;
        .up_info{
            width: 320px;
            height:96px;
            display: flex;
            flex-flow:row nowrap;
            .u-face{
                width: 48px;
                height:48px;
                border-radius:50%;
                cursor:pointer;
                .fa{
                    img{
                        width: 48px;
                        height:48px;
                        border-radius:50%;
                    }
                }
            }
            .up_info_right{
                padding-top:10px;
                padding-left:10px;
                .name{
                    color:#FB7299;
                }
            }
        }
        .dankaku-wrap{
            width:320px;
            color: #6d757a;
            .item{
                .time{
                    width: 60px;
                    text-align: left;
                    padding-left: 16px;
                    padding-right: 0;
                    display:inline-block;
                    font-size: 12px;
                }
                .txt{
                    width:170px;
                    text-align: left;
                    padding-left: 16px;
                    padding-right: 0;
                    display:inline-block;
                }
                .send{
                    width:78px;
                    text-align: left;
                    padding-left: 16px;
                    padding-right: 0;
                    display:inline-block;
                    font-size: 12px;
                }
                .txt1{
                    color: #222;
                    width: 170px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .time1{
                    width:60px;
                   
                }
                .send1{
                    width: 88px;
                }
            }
        }
        #multi_page{
            width:320px;
            height: 382px;
            background-color:#f4f4f4;
            margin-top:10px;
            .nav{
                width:100%;
                height: 34px;
                font-size: 16px;
                span{
                    padding-left:10px;
                }
            }
            .list{
                .item{
                    padding-left: 10px;
                }
            }
        }
    }
</style>

<script>
import { Vue,Options } from "vue-class-component";

@Options({
    data(){
        return{
            noface:"@/assets/img/user/noface.jpg",
            message:[{time:"02:38",txt:"我来证明有弹幕",send:"7-27 16:40"}]
        }
    },
    props:{
        author:String,
        id:String,
        title:String,
        url:String
    }
})

export default class Right extends Vue{
    
}
</script>