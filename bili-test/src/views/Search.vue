<template>
    <err-nav>
        <template v-slot:none>
            <div></div>
        </template>
    </err-nav>
    <div id="search-item">
        <span id="txt">bilibili搜索</span>
        <el-input v-model="input" placeholder="请输入内容" style="width:330px;"></el-input>
        <el-button type="primary" @click="search"><i class="bilifont bili-icon_dingdao_sousuo nav-search-submit"></i><span class="search-text">搜索</span></el-button>
    </div>
    <ul id="box">
        <li v-for="i in 10" :key="i" class = "item"></li>
    </ul>
</template>

<style lang = "scss" scoped>
    #search-item{
        width:600px;
        display:flex;
        justify-content:space-around;
        margin:0 auto;
        position:relative;
        top:-100px;
        #txt{
            font-size: 30px;
            color:#00a1d6;
            line-height: 30px;
        }
    }
    #box{
        width:980px;
        margin:0 auto;
        display: flex;
        flex-flow:wrap row;
        justify-content: space-between;
        border-top:1px solid #ccd0d7;
        position:relative;
        top:-50px;
        .item{
            width:170px;
            height: 210px;
            border:1px solid #ccd0d7;
            margin-top:20px;
        }
    }
</style>

<script>
import { Vue,Options } from "vue-class-component";
import errNav from "@/components/header/errNav.vue";

@Options({
    data(){
        return{
            input:''
        }
    },
    components:{
       errNav
    },
    created(){
        document.title = this.$route.query.keyword + ' _ 搜索结果_哔哩哔哩_Bilibili';
    },
    methods:{
        search(){
            this.$router.push({path:'/search',query:{keyword:this.input}})
        }
    }
})

export default class Search extends Vue{
    
}
</script>