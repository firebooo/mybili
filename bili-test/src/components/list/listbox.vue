<template>
    <div id = "list-box">
        <i class="ear bilifont bili-icon_youdaohang_xiaodianshitianxian"></i>
        <div v-for = "item in lists" :key="item" class="item" @click="test(item)">{{item}}</div>
        <div class="item sort">
            <a class="bilifont bili-icon_youdaohang_paixu" href="#"></a>            
        </div>
        <div class="item back-top">
            <a class="bilifont bili-general_pullup_s" href="#"></a>
        </div>
    </div>
</template>

<script lang = "ts">
import { Vue,Options } from "vue-class-component";


@Options({
    data(){
        return{
            lists:["动画","汽车","纪录片","影视","TV剧","电影","专栏","娱乐","资讯","时尚","鬼畜","动物园","美食","直播","舞蹈","游戏","科技","国创","番剧","漫画","课堂","生活","音乐","知识"]
        }
    },
    methods:{
        test(n:number){
            this.lists.splice(n,1);

        }
    },
    
})

export default class listBox extends Vue{
    
}
</script>

<style lang="scss" scoped>
    div#list-box{
        width:56px;
        height:621px;
        border: 1px solid #e7e7e7;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        z-index: 100;
        position:sticky;
        float:right;
        top:0px;
        right:50px;
        background-color:#fff;
        i.ear{
            position: absolute;
            top: -10px;
            font-size: 12px;
            left: 3px;
            z-index: 2;
        }
        .item{
            width: 54px;
            height:25px;
            text-align: center;
            line-height:25px;
            cursor:pointer;
            &:hover{
                background-color:aqua;
                color:#fff;
            }
        }
    }
</style>