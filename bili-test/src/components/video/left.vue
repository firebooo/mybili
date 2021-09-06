<template>
    <div class="l-con">
        <div class="info">
            <div id="report">
                <h1 class="tit">{{title}}</h1>
                <span class="v_data" :title="count">{{count}}次播放</span>
                <span class="dm">弹幕{{dm}}</span>
                <span class="time">{{time}}</span>
            </div>
        </div>
        <div class="video">
            <!-- <video style="width:638px;height:447px;" controls preload="metadata" autoplay>
                <source  :src="'http://localhost:3000/video/'+url+'/video_1'" type="video/mp4" media="">
                <source  :src="'http://localhost:3000/video/'+url+'/video_1'" type="video/ogg" media="">
                <source  :src="'http://localhost:3000/video/'+url+'/video_1'" type="video/webp" media="">
            </video> -->
            <video :src="'http://localhost:3000/video/'+url+'/video_1'" style="width:638px;height:447px;" controls preload="metadata" autoplay id="video"></video>
        </div>
        <div class="pinglun">
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .l-con{
        width: 638px;
        .info{
            #report{
                width:638px;
                height: 96px;
                padding-top:20px;
                color:#999;
                .tit{
                    font-size: 18px;
                    font-weight: 500;
                    color: #212121;
                    line-height: 26px;
                    height: 26px;
                    margin-bottom: 8px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .dm{
                    margin:0 10px;
                }
            }
        }
        .video{
            width:638px;
            height: 447px;
        }
    }
</style>

<script>
import { Vue,Options } from "vue-class-component";

@Options({
    data(){
        return{
            count:Math.floor(Math.random()*10000),
            dm:Math.floor(Math.random()*10000),
            duration:0
        }
    },
    props:{
        title:String,
        time:String,
        url:String
    },
    mounted(){
        let video = document.getElementById('video');
        let duration = 0;
        video.onloadedmetadata = function(){
            duration = this.duration;
        }
        this.duration = duration;
    }
})

export default class Left extends Vue{
    
}
</script>