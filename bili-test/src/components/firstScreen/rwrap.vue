<template>
    <div class="box">
        <Box v-for="item in 6" :key = "item">

        </Box>
    </div>
    
</template>

<script>
import {Vue,Options} from 'vue-class-component';
import Box from '@/components/firstScreen/box.vue';
@Options({
    components:{
        Box,
    }
})
export default class Rwrap extends Vue{
    
}
</script>
<style lang="scss" scoped>
    .box{
        width:530px;
        height: 202px;
        display:flex;
        flex-flow:row wrap;
        justify-content: space-between;
    }
</style>