<template>
  <div>
    <com-header :loginUser="loginUser"></com-header>
    <div class="content" id="app">
      <span>标题:</span>
      <input type="text" name="" id="" class="title-text" v-model="title"/>
    <div>
        <div>内容:</div>
      <textarea class="content-text" v-model="content"></textarea>
    </div>
    <button class="btn" @click="postBlogs">发表文章</button>
  </div>
   </div>
</template>
<script>
import ComHeader from "../components/comHeader";
export default {
    data() {
        return {
            loginUser: localStorage.getItem('loginUser'),
            content: '',
            title: '',
        }
    },
  name: "app",
  components: {
    ComHeader,
  },
  methods: {
    postBlogs(){
      this.$http.post('/blog/postBlogs',{
        user_id: localStorage.getItem('userId'),
        content: this.content,
        title: this.title,
      }).then((res) => {
        console.log(res);
      })
    }
  },
};
</script>

<style  scoped>
.content {
  width: 900px;
  margin: 0 auto;
}
.title-text {
    margin-top: 20px;
  background-color: #cccccc;
  width: 815px;
  height: 20px;
}
.content-text {
    margin-top: 20px;
  background-color: #cccccc;
  width: 815px;
  height: 815px;
}
.btn {
  width: 70px;
}
</style>