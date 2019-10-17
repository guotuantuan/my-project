<template>
  <div class="loginBg" id="login">
    <div class="welcome">
      欢迎使用自定义系统
    </div>
    <div class="login_form">
      <div class="login_input">
        <Input v-model="name" placeholder="用户名" style="width: 300px" />
      </div>
      <div class="login_input">
        <Input v-model="password" placeholder="密码" style="width: 300px" />
      </div>

      <div class="submit">
        <Button type="primary" :loading="loading" @click="login">
          <span v-if="!loading">登陆</span>
          <span v-else>Loading...</span>
        </Button>
      </div>
      <div class="submit">
        <Button type="primary" :loading="loading2" @click="test">
          <span v-if="!loading2">测试登陆</span>
          <span v-else>Loading...</span>
        </Button>
      </div>
      <!--<Input v-model="value" placeholder="Enter something..." style="width: 300px" />-->
    </div>

  </div>
</template>

<script>
  export default {
    name: 'login',
    data(){
        return{
            name:'',
            password:'',
            loading:false,
            loading2:false,
        }
    },
    methods:{
        login:function () {
          var self = this;
          this.loading = true;
          var data={};
          this.$axios.post("/login",data).then(res=>{
            if(res.code==200){

            }
            self.loading =  false;
          })

        },
        test:function () {
          var self = this;
          this.loading2 = true;
          var data={};
          this.$axios.post("/test",data).then(res=>{
            if(res.code==200){

            }
            self.loading2 =  false;
          })

        },

    },

  }
</script>
<style>
  .loginBg{
    width:1326px;
    height:620px;
    background: cornflowerblue;
    font-family: "Microsoft YaHei";
    padding-top: 60px;
  }
  .login_form{
    /*float:left;*/
    margin-top: 150px;
  }
  .login_input{
    margin-top: 20px;
  }
  .welcome{
    font-size: 30px;
    /*margin-top: 60px;*/
  }
  .submit{
    margin-top: 30px;
  }
</style>
