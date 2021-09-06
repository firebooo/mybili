<template>
    <div>
        <err-nav>
            <template v-slot:none>
                <div id="pic"><img src="@/assets/img/nologin/top.png" alt=""></div>
            </template>
        </err-nav>
    </div>
    <div class="title">
         <el-divider></el-divider>
         <div class="txt" @click="toLogin">登录</div>
    </div>
    <div class="form-group">
        <form id="register" methods="post">
            <el-input placeholder="输入用户名" v-model="name" class="el-input"></el-input>
            <el-input placeholder="输入密码" v-model="pwd" class="el-input"></el-input>
            <el-button type="primary" style="width:186px;height:40px;margin-right:30px;" @click="login">登录</el-button> 
            <el-button style="width:186px;height:40px;" @click="toRegister">注册</el-button>    
        </form>
    </div>
</template>

<style lang="scss" scoped>
    #pic{
        width:100%;
        height: 86px;
        position:relative;
        top:60px;
        background-color: #00a0d8;
        text-align: center;
        img{
            width: 980px;
            height: auto;
            
        }
    }
    .title{
        width:980px;
        margin:0 auto;
        position:relative;
        top:-90px;
        .txt{
            background-color:#fff;
            line-height: 50px;
            font-size: 38px;
            width:110px;
            height: 56px;
            position:relative;
            left: 50%;
            transform:translate(-50%,-50px);
            text-align: center;
        }
    }
    .form-group{
        width: 980px;
        height: 400px;
        margin:0 auto;
        position:relative;
        top:-80px;
        #register{
            text-align: center;
            .el-input{
                width:420px;
                box-sizing:border-box;
                margin:50px auto;
                display:block;
            }
        }
        
    }
</style>

<script>
import { Vue,Options } from "vue-class-component";
import errNav from '@/components/header/errNav.vue';

@Options({
    data(){
        return{
            name:'',
            pwd:''
        }
    },
    components:{
        errNav
    },
    methods:{
        toRegister(){
            location.pathname="/register";
        },
        toLogin(){
            this.$router.push('/login');
        },
        login(){ 
            console.log(this.$store.state.isConnect);
            if(this.name === ''|| this.pwd === ''){
                this.$alert('用户名或者密码不能为空哦~', '提示', {
                    confirmButtonText: '确定',
                    callback: null
                });
                return;
            }

            this.$axios.post('http://localhost:3000/login',{
                name:this.name,
                password:this.pwd
            }).then((res)=>{
                if(res.data.status === "admin"){
                    location.href = "http://localhost:3000/views/admin.html";
                }else if(res.data.status === "success"){
                    console.log("success");
                    console.log(res.data.name)
                    this.$cookies.set('uid',res.data.id,60*60*24);
                    this.$cookies.set('name',res.data.name,60*60*24);
                    this.$router.replace({path:'/'});
                    window.scrollTo(0,0);
                }else if(res.data.status === "no"){
                    this.$alert('用户名或者密码错误','提示',{
                            confirm:'确定',
                            callback:null
                    });
                }
                this.name = this.pwd = '';
                
                console.log(res)
            }).catch((e)=>{
                console.log(e);
            });
        }
    }
})

export default class Register extends Vue{
    
}
</script>