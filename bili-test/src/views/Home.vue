<template>

      <Nav></Nav>
      <Back></Back>
      <Bwrap></Bwrap>
      <Report></Report>
      <!-- <list-box></list-box> -->
      <report-2></report-2>
      
      <Card name = "动画">
        <img src="@/assets/svg/donghua.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "汽车">
        <img src="@/assets/svg/qiche.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "纪录片">
        <img src="@/assets/svg/jilupian.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "影视">
        <img src="@/assets/svg/yingshi.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "TV剧">
        <img src="@/assets/svg/dianshiju.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "电影">
        <img src="@/assets/svg/dianying.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "专栏">
        <img src="@/assets/svg/zhuanlan.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "娱乐">
        <img src="@/assets/svg/zixun.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "时尚">
        <img src="@/assets/svg/shishang.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "鬼畜">
        <img src="@/assets/svg/guichu.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "动物园">
        <img src="@/assets/svg/dongwuyuan.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "美食">
        <img src="@/assets/svg/meishi.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "直播">
        <img src="@/assets/svg/zhibo.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "舞蹈">
        <img src="@/assets/svg/wudao.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "游戏">
        <img src="@/assets/svg/youxi.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "科技">
        <img src="@/assets/svg/keji.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "国创">
        <img src="@/assets/svg/guochuang.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "番剧">
        <img src="@/assets/svg/fanju.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "漫画">
        <img src="@/assets/svg/manhua.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "课堂">
        <img src="@/assets/svg/ketang.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "生活">
        <img src="@/assets/svg/shenghuo.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "音乐">
        <img src="@/assets/svg/yinyue.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
      <Card name = "知识">
        <img src="@/assets/svg/zhishi.svg" alt="" class="svg">
        <template v-slot:video v-if="isShow">
          <span class="txt">暂时没有内容。。</span>
          <img src ="@/assets/img/normal/bgm-nodata.png" class="pic"/>
        </template>
      </Card>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
//import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Nav from '@/components/header/navbar.vue';
import Back from '@/components/header/back.vue';
import Bwrap from '@/components/bwrap/bwrap.vue';
import Report from "@/components/firstScreen/report.vue";
import listBox from "@/components/list/listbox.vue";
import Report2 from "@/components/firstScreen/report2.vue";
import Card from "@/components/card/card.vue";

@Options({
  data(){
    return{
      isShow:true
    }
  },
  created(){
    // setInterval(()=>{
    //   this.isShow = !this.isShow;
    // },5000);
    setTimeout(()=>{
      console.log(this.$cookies.get("name"));
      console.log(sessionStorage.getItem('name'));
    },1000*40);
    setTimeout(()=>{
      console.log(this.$cookies.get("name"));
      console.log(sessionStorage.getItem('name'));
    },1000*80);
    console.log(document.cookie);
    this.$axios.get('http://localhost:3000/connect').then((res)=>{
      console.log(res.data.status);
      if(res.data.status === "connect"){
        this.$store.commit("getStatus",true);
      }
      console.log(this.$store.state.isConnect);
    }).catch((err)=>{
      console.log(err);
    })
  },
  components: {
    Nav,Back,Bwrap,Report,listBox,Report2,Card
    // HelloWorld
  },
  methods:{

  }
})
export default class Home extends Vue {}
</script>

<style lang = "scss" scoped>
    .pic{
      text-align: center;
    }
    .txt{
      position: relative;
      top:-200px;
      left:250px;
    }
</style>
