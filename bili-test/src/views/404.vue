<template>
    <div id = "top">
        <err-nav>
        </err-nav>
    </div>
</template>

<script>
import { Vue,Options } from "vue-class-component";
import errNav from '@/components/header/errNav.vue';

@Options({
    components:{
        errNav
    }
})

export default class Error extends Vue{
    
}
</script>

<style lang='scss'>
    #top{
        width:100%;
    }
</style>