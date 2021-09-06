<template>
    <div id="info-box">
        <a :href="url">
            <img src="@/assets/img/box/1.jpg" alt="">
            <div class="box">
                <p :title = "title" class="title">{{title}}</p>
                <p class="author"><span class="up">up</span> <i class="name">{{author}}</i></p>
                <p class="count">{{count}}万播放</p>
            </div>
        </a> 
    </div>
</template>

<script>
import { Vue,Options } from "vue-class-component";

@Options({
    data(){
        return{
            url:"//www.bilibili.com/video/BV1c5411u7Cv?spm_id_from=333.851.b_7265636f6d6d656e64.3",
            title:"这才是城之内VS马利克的真正结局【游☆屑☆王外传】",
            author:"板糖",
            count:8.6
        }
    }
})

export default class Box extends Vue{
    
}
</script>

<style lang="scss" scoped>
    #info-box{
        width:170px;
        height:96px;
        overflow:hidden;
		position:relative;
		font-size:14px;
        &:hover{
                div.box{
                    top:0;
                    background-color:rgba(0,0,0,0.8);
                    .title{
                        width: initial;
                        white-space:normal;
                    }
                }
        }
        img{
            width:100%;
            height:auto;
            
        }
        .box{
            width:170px;
			height:96px;
			padding-left:10px;
			background-color:rgba(0,0,0,0);
			position:absolute;
			top:70px;
			box-sizing:border-box;
			transition:all 0.5s;
			z-index: 10;
            
            p{
                color:#fff;
                margin:3px;
            }
            
            .name{
                font-style:normal;
                padding-left:5px;
            }
            .author{
				font-size:12px;
			}
            .title{
				width:150px;
				height: 40px;
				overflow: hidden;
				white-space:nowrap;
				color:white;
				text-overflow:ellipsis;
			}
        }
        
    }
</style>