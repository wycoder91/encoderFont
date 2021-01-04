<template>
  <div class = "login_container">
    <div class="login_box">
      <!-- 登陆logo -->
      <div id="avata_box">
        <img id="login_logo" src="../assets/logo.png" />
      </div>
      <!-- 登陆表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" id="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user-solid" placeholder="用户名" v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-delete-solid" placeholder="密码" v-model="loginForm.password" type="password" v-on:keydown="getEnterr(event)"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item id="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'login',
    data() {
      return{
        loginForm:{
          username:'',
          password:''
        },
        loginFormRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      }
    },
/*   create(){
      //创建实例时设置配置的默认值
      	const httpHandler = this.$http.create({
      	headers: { "Content-Type": "application/json;charset=utf-8" }, //即将被发送的自定义请求头
      	withCredentials: true //表示跨域请求时是否需要使用凭证
        });
        let uri = "apis/weather/city/101030100";
        httpHandler.get(uri).then(result => { console.log(result); }).catch(error => { console.error(error); });
    }, */
    methods:{
      //重置表单数据
      resetLoginForm(){
        // console.log(this);//this指的是该组件vue实例
        this.$refs.loginFormRef.resetFields();
      },
      //登录验证
      login(){
         this.$refs.loginFormRef.validate((valid)=>{
          if(!valid) return;
          /* const result = this.$http.post("http://localhost:8080/login");//？后续再找问题
          console.log(result); */
          this.$message.success("登录成功");
          // this.$message.error("登录失败");
          this.$router.push("/home");
          });
      },
      getEnterr(event){
        if(event.keyCode == 13){
          login();
        }
      }
    }
  }
</script>

<style scoped>
  .login_container{
      background-color: #2b4b6b;
      height: 100%;
  }
  .login_box{
      width: 450px;
      height: 300px;
      background-color: #FFFFFF;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      right: 50%;
      transform: translate(-50%,+50%);
    }
    /*登陆logo*/
    /* ？将图片放入盒子后，class设置div样式无效，而id可以生效 */
  #avata_box{
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      background-color: #fff;
    }
  #login_logo{
      height: 100%;
      width: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
    /*登陆表单*/
  #login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    }
  #btns{
    display: flex;
    justify-content: flex-end;
  }
</style>
