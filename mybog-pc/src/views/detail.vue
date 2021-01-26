<template>
  <div id="app">
    <com-header :loginUser="loginUser"></com-header>
    <div class="container">
      <div >
        <h3>{{ blogs.title }}</h3>
        <span> {{ blogs.post_time }} </span>
      </div>
      <div >{{ blogs.content }}</div>
      <div >
        <h4 class="comments">评论</h4>
        <h4>发表评论: <button @click="postComm">发表评论</button>{{message}}</h4>
        <textarea
          style="background: #cccccc"
          name=""
          id=""
          cols="110"
          rows="10"
          v-model="textComm"
        ></textarea>
        <div  v-for="item in comments" :key="item.comm_id" class="comments">
          <div >
            <span>评论内容：</span>{{ item.comm_content }}
          </div>
          <div class="user-time">
            <span style="margin-right:10px">{{ item.username }}</span>
            <span >{{ item.comm_post_time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComHeader from "../components/comHeader";
export default {
  data() {
    return {
      blogs: {},
      comments: [],
      loginUser: "",
      textComm: "",
      message: '',
    };
  },
  name: "app",
  components: {
    ComHeader,
  },
  created() {
    this.getblogId();
  },
  methods: {
    getblogId() {
      this.blogId = this.$route.query.blogId;
      this.$http("/blog/blogDetail", {
        params: {
          blogId: this.blogId,
        },
      }).then((res) => {
        console.log(res);
        let loginUser = localStorage.getItem("loginUser");
        console.log(loginUser);
        this.loginUser = loginUser;
        this.blogs = res.data.blogs;
        this.comments = this.blogs.comments;
      });
    },
    postComm() {
      let userId = localStorage.getItem("userId");
      this.$http
        .post("/blog/postComm", {
          user_id: userId,
          blog_id: this.blogId,
          content: this.textComm,
        })
        .then((res) => {
          console.log(res);
          let {state, message} = res.data;
          this.message = message;
          if(state == 'success'){
            location.reload();//发表成功
          }
        });
    },
  },
};
</script>

<style scoped>
.container{
  width: 815px;
  margin: 20px auto;
}
.comments{
  background-color: #cccccc;
  margin-top: 20px;
  position: relative;
  height:80px;
}
.user-time{
  position: absolute;
  right: 3px;
  bottom: 3px;
}
</style>