<template>
    <div class="container">
        <div class="screen">
            <Screen></Screen>
        </div>
        <div class="report">
            <Rwrap></Rwrap>
        </div>
    </div>  
</template>

<script>
import { Vue,Options } from "vue-class-component";
import Rwrap from "@/components/firstScreen/rwrap.vue";
import Screen from "@/components/firstScreen/screen.vue";

@Options({
    components:{
        Rwrap,Screen
    }
})

export default class Report extends Vue{
    
}
</script>
<style lang="scss" scoped>
    div.container{
      width: 998px;
      height: 202px;
      margin:0 auto;
      display:flex;
      flex-flow:row wrap;
      justify-content: space-around;
      .screen{
          width:459px;
          height: 202px;
      }
      .report{
          width:503px;
          height: 202px;
      }
    }
</style>