<template>
    <div id = "report">
        <div id="banner">
            <img src="@/assets/svg/tuiguang.svg" alt="" class="svg">
            <span class="name">推广</span>
            <div class="text-info">
                <a href="#" class="miaoshu">
                <i class="bilifont bili-icon_xinxi_huo"></i> 
                    虚拟形象定制邀请函>>>
                </a>
            </div>
            <div class="card-pic">
                <ext></ext>
                <ext></ext>
                <ext></ext>
                <ext></ext>
            </div>
        </div>
        <div id="bypb-window">
            <div class="online">
                <a href="#">观看列表</a>
            </div>
            <div class="ad">
                <a href="#">
                    <img src="@/assets/img/ad/1.jpg" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #report{
        width:999px;
        height: 224px;
        margin:20px auto;
        display: flex;
        justify-content:space-between;
        #banner{
            .card-pic{
                width:710px;
                margin-top: 20px;
                display: flex;
                flex-flow:row nowrap;
                justify-content:space-between;
            }
            .text-info{
                display:inline-block;
            }
            
            .bili-icon_xinxi_huo{
                margin-right: 3px;
                color: #f0361b;
            }
        }
        #bypb-window{
            width: 265px;
            cursor:pointer;
            .online{
                width: 265px;
                height:30px;
                text-align: center;
                margin-top: 3px;
                margin-bottom: 19px;
                height: 30px;
                border: 1px solid #e7e7e7;
                border-radius: 2px;
                background: #f4f4f4;
                color: #505050;
                line-height: 30px;
            }
            .ad img{
                width: 265px;
                height: 152px;
            }
        }
    }
</style>

<script>
import { Vue,Options } from "vue-class-component";
import Ext from "@/components/firstScreen/ext.vue";
@Options({
    components:{
        Ext
    }
})
export default class Report2 extends Vue{
    
}
</script>