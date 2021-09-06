<template>
    <div id="back" @click = "a">
        <a href="/home" ><img src="../../assets/bili.png" alt=""></a>
    </div>
</template>

<script lang = "ts">
    import {Options,Vue} from 'vue-class-component'
    @Options({
        
    })
    export default class Back extends Vue{

    }
</script>

<style scoped lang = "scss">
    div#back{
        img{
            width: 163px;
            height: 78px;
            position: absolute;
            z-index: 5;
            bottom:10px;
            left:150px;
        }
        background-image:url('../../assets/back.png');
        margin: 0 auto;
        position: relative;
        top:0px;
        z-index: -1;
        min-height: 155px;
        height: 9.375vw;
        min-width: 999px;
        background-color: #f9f9f9;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        background-repeat: no-repeat;
        background-position: center 0;
        background-size: cover;
    }
</style>