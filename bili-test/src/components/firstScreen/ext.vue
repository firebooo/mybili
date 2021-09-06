<template>
        <div class="ext-card">
            <div class="ext-pic">
                <a href="#">
                    <img src="@/assets/img/ad/2.jpg" alt="">
                </a>
                <div class="ext-a">
                <div class="ad">
                    <a class = "title" href="#"><span class="gg">广告</span>每天剪辑一小时，在家接单做外快~</a>
                    <br/>
                    <a class = "author" href="#">中职通</a>
                </div>
            </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .ext-card{
        .ext-pic{
            width:170px;
            height:172px;
            img{
                width: 170px;
                height: 96px;
            }
            .ext-a{
            padding-top:10px;
            .ad{
                margin: 5px;
                .title{
                    width:170px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    font-size: 14px;
                    color:#000;
                    &:hover:not(.gg){
                        color:aqua;
                    }
                }
                .gg{
                    border-radius:3px;
                    border:1px solid gray;
                    color:gray;
                }
                .author{
                    padding-top: 15px;
                    &:hover{
                        color:aqua;
                    }
                }  
            }
        }
        }
        
    }
</style>

<script>
import { Vue,Options } from "vue-class-component";

@Options({

})

export default class Ext extends Vue{
    
}
</script>