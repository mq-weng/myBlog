<template>
  <div class="home">
    <div class="sticky">

    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <select v-model="name">
      <option value="小王">xiaowang</option>
      <option value="小李">xiahua</option>
      <option value="小花">xiaol</option>
    </select>
  <select v-model="age">
      <option value="1">xiaowang</option>
      <option value="2">xiahua</option>
      <option value="3">xiaol</option>
    </select>
    <p>{{com}}</p>

  </div>
</template>
<style >
  .sticky{
    position: sticky;
    background-color: aqua;
    width: 200px;
   height: 200px;
   top: 50px; /*黏在距离上一个定位的节点的top：50px */
  }
  .home{
    height:2000px
  }
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      name: '',
      age: null,
    }
  },
  watch:{      //watch侦听 name的变化
    name: function(newValue){
      console.log("触发watch,开始ajax啦")
      if(newValue == '小王') {
        console.log('小王的地址')
      }
    }
  },
  computed: {
    com: function(){
      console.log('computed触发了'+Date.now())//计算属性是基于它们的响应式依赖进行缓存的。
      return this.name,this.age,Date.now();  //计算属性也算监听了俩值
    }
  }
}
</script>
