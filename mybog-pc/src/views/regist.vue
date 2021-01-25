
<template>
  <div>
    <div class="container">
      <div class="login-form">
        <h3>用户注册</h3>
        <p>
          用户名：<input type="text" id="iptUsername" v-model="username" @blur="checkRegist" />
          <span v-if="blur == 'fail'">用户名重复</span>
        </p>
        <p>
          密码：<input
            type="password"
            name="password"
            v-model="password"
          />
        </p>
        <p>昵称：<input type="text" name="nickname" v-model="nickname" /></p>
        <p>
          <button class="btn" @click="doRegist">注册</button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      blur: "",
    };
  },
  created() {},
  methods: {
    checkRegist() {
      if (this.username.trim().length > 0) {
        this.$http.get("/user/regist",{
                    username: this.username
                    }).then((res) => {
          console.log(res); //给blur一个bool值
          this.blur = res.data;
        });
      }
    },
    doRegist() {
      this.$http
        .post("/user/regist", {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        })
        .then((res) => {
          console.log(this.username);
          console.log(res);
        });
    },
  },
};
</script>