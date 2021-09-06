<template>
    <div class="block">
    <el-carousel height="202px" trigger="click">
      <el-carousel-item v-for="item in data" :key="item">
        <div class = 'container'>
            <span class="title">{{item.title}}</span>
            <img src="@/assets/img/carousel/1.png" />
            <!-- <img src = "@/assets/img/carousel/1.png"/> -->
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang = "scss">
    .block{
        width:459px;
        height:202px;
        .container{
            position:relative;
            img{
                width:100%;
                height: 202px;
            }
            span.title{
                position:absolute;
                color:#fff;
                bottom:10px;
                left:10px;
            }
        }    
    }
</style>

<script>
import {Options,Vue} from 'vue-class-component';
@Options({
    data(){
        return{
            data:[
                {id:1,url:"@/assets/img/carousel/1.png",title:"热门续作回归！番剧7月新番导视"},
                {id:2,url:"@/assets/img/carousel/2.jpg",title:"abcdefg"},
                {id:3,url:"@/assets/img/carousel/3.jpg",title:"gggggggg"},
                {id:4,url:"@/assets/img/carousel/4.jpg",title:"zxcsdasdwd"},
                {id:5,url:"@/assets/img/carousel/5.png",title:"aweqrqwead"}
            ]
        }
    }
})
export default class Carousel extends Vue{
    
}
</script>