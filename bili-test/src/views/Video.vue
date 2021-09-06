<template>
    <div>
        <err-nav>
            <template v-slot:none>
                <div></div>
            </template>
        </err-nav>
    </div>
    <div class="v-wrap">
        <left  :title="title" :time="time" :url="url"></left>
        <right :author="author" :id="id" :title="title" :url="url"></right>
    </div>
</template>
<style lang="scss" scoped>
    .v-wrap{
        width:1124px;
        margin:0 auto;
        position:relative;
        top:-135px;
        max-width: 1984px;
        min-width: 988px;
        margin: 0 auto;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: space-around;
        background-color:#fff;
    }
</style>
<script>
import { Vue,Options } from "vue-class-component";
import errNav from '@/components/header/errNav.vue';
import Left from '@/components/video/left.vue';
import Right from '@/components/video/right.vue'

@Options({
    data(){
        return{
            author:'',
            title:'',
            time:'',
            id:'',
            url:''
        }
    },
    components:{
        errNav,Left,Right
    },
    created(){
        this.$axios.get('http://localhost:3000/getVideo',{params:{id:this.$route.params.id}}).then((res)=>{
            console.log(res);
            document.title = res.data.result[0].title + '_哔哩哔哩_bilibili';
            this.author = res.data.result[0].author;
            this.title = res.data.result[0].title;
            this.id = res.data.result[0].uid;
            this.time = res.data.result[0].time;
            this.url = res.data.result[0].url;
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        })
    },
})

export default class Video extends Vue{
    
}
</script>