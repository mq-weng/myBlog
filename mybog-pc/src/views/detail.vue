<template>
  <div class="container" id="app">
    <com-header :loginUser="loginUser"></com-header>
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blogs.title }}</h3>
        <span> {{ blogs.post_time }} </span>
      </div>
      <div class="blog-content">{{ blogs.content }}</div>
      <div class="comments">
        <h4 style="background: #cccccc">评论</h4>
        <h4>发表评论: <button @click="postComm">发表评论</button></h4>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="textComm"
        ></textarea>
        <div class="comment" v-for="item in comments" :key="item.comm_id">
          <div class="comment-content">
            {{ item.comm_content }}
          </div>
          <div class="comment-info">
            <span class="userinfo">{{ item.username }}</span>
            <span class="post-time">{{ item.comm_post_time }}</span>
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
        });
    },
  },
};
</script>

<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  margin-top: 20px;
  padding: 20px;
  background: #cccccc;
}
.comment-info {
  float: right;
}
.userinfo {
  padding-right: 20px;
}
</style>