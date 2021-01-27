<template>
  <div class="container">
    <div class="login-form">
      <h3>用户登录</h3>
      <div style="height:20px">
        <span class="error_tips" id="username" >用户名不能为空！</span>
      </div>
      <p>用户名：<input type="text" v-model="username" @blur="checkUsername" @focus="clear"/></p>
      <p>密码：<input type="password" name="password" v-model="password" /></p>
      <p>
        <button @click="doLogin" class="btn">登录</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
    };
  },
  methods: {
    //检查input里是否为空
    checkUsername() {
        console.log('blur执行了');
        let username = document.getElementById('username');
        if (this.username.length == 0) {
            username.style.display = 'block'
        }
    },
    clear() {
        console.log('focus执行了');
        let username = document.getElementById('username');
        username.style.display = 'none'
    },
    //检查用户名是否有值
    doLogin() {
      this.$http
        .post("/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          let { inputState, message, token, state ,loginUser,userId} = res.data;
          this.message = message;
          if (inputState != "fail") {
            if (state == "success") {
              //获取token
              //存储user 到vuex
              this.$store.commit('setUser',loginUser);
              this.$store.commit('setUserId',userId);
              //存储token 到vuex
              this.$store.dispatch("setToken",token);
              this.$router.push("/");
            } else {
              console.log("登录失败");
            }
          }
        });
    },
  
    
  },
};
</script>
<style >
.login-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
}
/*全局用 */
.login-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
}

 .error_tips {
    width: auto;
    border: none;
    background: none;
    position: static;
    color: #c00;
    display: none;
}
</style>