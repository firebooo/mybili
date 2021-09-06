<template>
    <div id = "bwrap">
        <Carousel></Carousel>
        <Recommad></Recommad>
    </div>
</template>

<style lang = "scss" scoped>
    div#bwrap{
        @media only screen and (min-width:1349px){
            width:998px;
        }
        @media only screen and (min-width:1654px){
            width:1190px;
        }
        @media only screen and (min-width:1870px){
            width:1414px;
        }
        display:flex;
        margin:0 auto;
        height:202px;
    }
</style>

<script>
import { Vue,Options } from "vue-class-component";
import Carousel from "@/components/firstScreen/carousel.vue";
import Recommad from "@/components/firstScreen/recommad.vue";
@Options({
    components:{
        Carousel,Recommad
    }
})

export default class Screen extends Vue{
    
}
</script>