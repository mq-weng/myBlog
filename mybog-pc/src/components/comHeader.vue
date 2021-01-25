<template>
  <header>
    <div class="title">MyBlog</div>
    <div class="login-box">
      <div v-if="loginUser">
        {{ loginUser }}
      </div>
      <div v-else>
        <router-link to="/login">登录</router-link>/<router-link to="/regist"
          >注册</router-link
        >
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: ["loginUser"],
  data() {
    return {};
  },
  created() {},
  methods: {
    getHeader() {},
  },
};
</script>

<style scoped>
/* css reset */
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}

/* 能用样式 */
header {
  width: 1200px;
  margin: 0 auto;
  height: 50px;
  background: #cccccc;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>