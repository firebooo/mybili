<template>
    <div class="container">
        <div class="cardleft">
            <div class="navbar">
                <slot></slot>
                <span class="name">{{name}}</span>
            </div>
            <slot name="video">
                <div class="video">
                <div class="video-card" v-for = "item in 8" :key="item">
                    <div class="card-pic">
                        <a href="#">
                            <img src="@/assets/img/card/1.webp" alt="">
                        </a>
                        <span class="count">
                            <i class='bilifont bili-icon_shipin_bofangshu'></i>
                            38.0万
                            <i class="bilifont bili-icon_shipin_dianzanshu"></i>
                            2.4万
                        </span>
                        <a href="#" class="title">刻师傅 这次深渊你就打300伤害？【萌新瞎配】</a>
                        <a href="#" class="gray"><span class="up">up</span>萌新二次方</a>
                    </div>
                </div>
            </div>
            </slot>
                
            
        </div>
        <div class="card-right">
            <rank></rank>
        </div>
    </div> 
</template>

<style lang="scss" scoped>
    .container{
        width:999px;
        height: 412px;
        margin:0 auto;
        display:flex;
        flex-flow:nowrap row;
        justify-content:space-between;
        .cardleft{
            width:710px;
            height: 360px;
            .video{
                width:710px;
                height: 360px;
                display: flex;
                flex-flow:row wrap;
                justify-content:space-between;
                align-content:space-around;
                .video-card{
                    width: 170px;
                    height: 170px;
                }
                .card-pic{
                    
                    img{
                        width:170px;
                        height: 96px;
                    }
                    span.count{
                        color:#fff;
                        position:relative;
                        bottom:25px;
                        left:10px;
                    }
                    .title{
                        font-size: 14px;
                        line-height: 20px;
                        height: 40px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        font-weight: 500;
                        padding-right: 12px;
                        margin-top:-10px;
                    }
                    .gray{
                        font-size: 12px;
                        color: #999;
                        line-height: 16px;
                    }
                }
            }
        }
    }
</style>

<script>
import { Vue,Options } from "vue-class-component";
import Rank from "@/components/card/rank.vue";
@Options({
    props:{
        name:String,
    },
    components:{
        Rank
    }
})
export default class Card extends Vue{
    
}
</script>