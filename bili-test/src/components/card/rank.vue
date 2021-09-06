<template>
    <div class="rank">
        <div class="title">
            排行榜
        </div>
        <div class="rank-list">
            <div class="rank-item" v-for="item in data" :key="item.id">
                <span :class="{'on':(item.id<=3)}">{{item.id}}</span>
                <a href="#">
                    <span :title="item.text" :class="['link']">{{item.text}}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .rank{
        width:265px;
        height: 412px;
        .title{
            display: inline-block;
            color: #212121;
            vertical-align: bottom;
            font-size: 20px;
            line-height: 28px;
            margin-bottom:20px;
        }
        .rank-item{
            width:265px;
            height: 20px;
            margin-bottom:18px;
            span{
                font-size: 14px;
                color: #999;
                width: 18px;
                height: 18px;
                line-height: 18px;
                background: #fff;
                display: inline-block;
                &.on{
                    text-align: center;
                    color: #fff;
                    background: #00a1d6;
                    border-radius:3px;
                }
            }
            .link{
                width: 235px;
                font-size: 14px;
                line-height: 20px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color:#000;
                overflow: hidden;
                text-overflow:ellipsis;
                margin-left: 10px;
                &:hover{
                    color:#00a1d6;
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
            data:[
                {id:1,text:"2021届清华美院动画毕设 |《万华镜》——百年党庆，献礼中华五十六个民族"},
                {id:2,text:"【蜜雪冰城/MEME】Machine Gun(?"},
                {id:3,text:"课堂请勿读恶评 ！【UP TALK】"},
                {id:4,text:"奶爆新番！7月最值得期待的十部动画！最后一部竟然霸气侧漏？！「2021年7月新番毒奶」"},
                {id:5,text:"期 末 查 分 现 状"},
                {id:6,text:"让 阿 斗 飞 ！"},
                {id:7,text:"岩王地姬"},
                {id:8,text:"\"失 忆 的 笨 狗\""},

            ]
        }
    }
})

export default class Rank extends Vue{
    
}
</script>