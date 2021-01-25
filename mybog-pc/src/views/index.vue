<template>
  <div class="container" id="app">
    <com-header :loginUser = "loginUser"></com-header>
    <div class="blog-list">
      <router-link to="/publishArticle">发表文章</router-link>
      <div class="blog" v-for="item in blogList" :key="item.blog_id">
        <h3 class="blog-title">
          <!-- <a href="/blog/detail/">{{ item.blogTitle }}</a> -->
          <router-link
            :to="{ path: '/blogDetail', query: { blogId: item.blog_id } }"
            >{{ item.title }}</router-link
          >
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">{{ item.post_time }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import ComHeader from '../components/comHeader'
export default {
  data() {
    return {
      blogList: [],
      loginUser:'',
    };
  },
  name: 'app',
   components: {
      ComHeader,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http({
        url: "/blog/list",
      }).then((res) => {
        console.log(res);
          let { blogs } = res.data;
          this.loginUser = localStorage.getItem("loginUser");
          this.blogList = blogs;
          console.log(localStorage.getItem("mytoken"));
      })
    },
  },
};
</script>

<style scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
}
.blog {
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
</style>