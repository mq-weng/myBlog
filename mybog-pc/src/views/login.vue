<template>
  <div class="container">
    <div class="login-form">
      <h3>用户登录</h3>
      <p>用户名：<input type="text" name="username" v-model="username" /></p>
      <span>{{ message }}</span>
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
.login-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
}
</style>