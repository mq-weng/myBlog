import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import BlogDetail from '../views/detail.vue'
import Regist from '../views/regist.vue'
import PublishArticle from '../views/publishArticle.vue'
// import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:'/',
  //   name:'About',
  //   component: About
  // },
  {
    path:'/',
    name:'Index',
    component: Index
  },
  {
    path:'/login',
    name:'Login',
    component: Login
  },
  {
    path:'/blogDetail',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path:'/regist',
    name:'Regist',
    component: Regist
  },{
    path:'/publishArticle',
    name:'PublishArticle',
    component:PublishArticle
  }
]

const router = new VueRouter({
  mode:'history',
  base: process.env.BASE_URL,
  routes
})

export default router
