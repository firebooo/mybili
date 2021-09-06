<template>
    <div class="container">
        <div id="about">
        <div class="tx">
            <img src="@/assets/profile.png" alt="图片找不到了^_^">
        </div>

        <div class="address">
            <h2>联系方式</h2>
            <p>QQ:2385577360@qq.com</p>
            <p>Tel:18271455296</p>
            <p>Wx:18271455295</p>
        </div>
        <div class="detail">
            <h2>个人信息</h2>
            <p>2020年毕业于武汉职业技术学院</p>
            <p>专业：计算机网络技术</p>
            <p>目前求职中。。。</p>
        </div>
        <div class="moni">
            <h2>描述</h2>
            <p>本网站属于个人练习项目</p>
            <p>学习vue3的使用中。。。</p>
            <p>各方面都不成熟，还望见谅。。</p>
        </div>
    </div>
    </div>
    
</template>

<style lang = "scss" scoped>
    .container{
        width: 100%;
        background-color:#1B1C1D;
        position:relative;
        z-index: -1;
        #about{
        width:998px;
        height: 300px;
        margin:0 auto;
        display:flex;
        justify-content:space-around;
        align-items:center;
        color:#fff;
        text-align:center;
        font-size:16px;
        .tx{
            img{
                width:110px;
                height:110px;
                border-radius:5px;
            }
        }
        
    }
    }
    
</style>

<script lang="ts">
import { Options,Vue } from "vue-class-component";

@Options({

})

export default class About extends Vue{
    
}
</script>