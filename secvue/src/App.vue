<script setup>
import HelloWorld from './components/HelloWorld.vue'
import component2 from './components/component2.vue'
import axios1 from './components/axios1.vue'
import { stringify } from 'querystring'
</script>

<template>
<div>
  <!--    <axios1 />     <component2 />           -->
  <p>counter={{$store.getters.getconut}}</p>
  <button @click="addclickhandle">增加</button>
  <button @click="addclickhandleanc">异步增加</button>
  <nav>
  <router-link to="/">首页</router-link>|
  <router-link to="/about">关于</router-link>
  </nav>
      <router-view></router-view>
  
</div>
</template>

<script>
export default{
  name: 'app',
  methods:{
    addclickhandle(){
      //固定调用方式 
      this.$store.commit("addCount");
    },
    addclickhandleanc(){
      this.$store.dispatch("asyncSetCount");
    }
  },
}
</script>

<style scoped>
</style>
