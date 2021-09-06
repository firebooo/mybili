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
         <div class="txt">注册</div>
    </div>
    <div class="form-group">
        <form action="" id="register" methods="post">
            <el-input placeholder="昵称" v-model="name" class="el-input"></el-input>
            <el-input placeholder="密码（6-16个字符组成，区分大小写）" v-model="pwd" class="el-input"></el-input>
                <div style="margin-top: 15px">
                    <el-select v-model="select" placeholder="请选择" style="float:left;width:130px;position:relative;left:280px;">
                        <el-option label="中国大陆" value="1"></el-option>
                        <el-option label="中国香港特别行政区" value="2"></el-option>
                        <el-option label="中国澳门特别行政区" value="3"></el-option>
                        <el-option label="中国台湾" value="4"></el-option>
                    </el-select>
         <el-input    placeholder="请填写常用手机号"  v-model="number" class="input-with-select" style="width:290px;postion:relative;left:65px;">
  </el-input>
  <el-input v-model="yanzheng" placeholder="请输入验证码"></el-input>
    <el-button type="primary" style="position:relative;top:-90px;left:380px;" @click="tishi">点击获取</el-button>
    <el-button type="primary" style="position:relative;width:420px;left:-50px" @click="register">注册</el-button>
</div>
        </form>
        <a class="login" href="/login">已有账号,登录》》</a>
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
        .login{
            color:blue;
            cursor:pointer;
            float:right;
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
            pwd:'',
        }
    },
    components:{
        errNav
    },
    methods:{
        tishi(){
            this.$alert('暂无此功能', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `请重新输入`
            });
          }
        });
        },
        register(){
            //将输入信息规定在长度在3~10的字母、数字、下划线的字符串
            let pattern = /\w{3,10}/;
            if(this.name === '' || this.pwd === ''){
                this.$alert('用户名和密码不能为空', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                    this.$message({
                     type: 'info',
                     message: `请重新输入`
                    });
                }
            });
            return;
            }else if(!(pattern.test(this.name)&&pattern.test(this.pwd))){
                   this.$alert('用户名和密码必须由长度为3-10的字母数字构成','提示');
                   this.name = '';
                   this.pwd = '';
                   return;
            }else{
                this.$axios.post("http://localhost:3000/register",{
                    name:this.name,
                    password:this.pwd
                }).then((res)=>{
                    console.log(res);
                    if(res.data.status === "success"){
                        this.$alert('注册成功,即将返回主页~','提示',{
                            confirm:'确定',
                            callback:null
                        });
                        // document.cookie = "name=" + res.data.name;

                        setTimeout(()=>{
                            this.$cookies.set("uid",res.data.id,60*60*24);
                            this.$cookies.set("name",res.data.name,60*60*24);
                            this.$router.replace({path:'/'});
                            window.scrollTo(0,0);
                        },1000);
                    }else{
                        this.$alert('注册失败,已有该用户名','提示',{
                            confirm:'确定',
                            callback:null
                        });
                        this.name = '';
                        this.pwd = '';
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
})

export default class Register extends Vue{
    
}
</script>