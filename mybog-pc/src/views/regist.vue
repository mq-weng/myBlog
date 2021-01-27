
<template>
  <div>
    <div class="container">
      <div class="login-form">
        <h3>用户注册</h3>
        <div style="height:20px">
        <span class="error_tips" id="username" >用户名不能为空！</span>
        {{message}}
      </div>
        <p>
          用户名：<input type="text" v-model="username" @blur="checkUsername" @focus="clear">
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
      message: '',
    };
  },
  created() {},
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
    doRegist() {
      this.$http
        .post("/user/regist", {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        })
        .then((res) => {
          let {state} = res.data;
          if(state == 'success'){
            this.message = res.data.message;
          }
        });
    }
  }
};
</script>
<style  scoped>
 .error_tips {
    width: auto;
    border: none;
    background: none;
    position: static;
    color: #c00;
    display: none;
}
</style>