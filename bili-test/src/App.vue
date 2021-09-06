<template>
    <router-view/>
    <About></About>
</template>

<style lang="scss">
    
</style>

<script lang = "ts">
import {Options,Vue} from 'vue-class-component'
import About from '@/components/about/about.vue'
@Options({
  components:{
    About,
  },
})
export default class App extends Vue{

}
</script>
<style type="scss" scoped>
    
</style>
