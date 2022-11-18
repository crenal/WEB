
<template>
<div>
    <img alt="Vue logo" src="./assets/logo.png">
     <component2 />
     <p> 现在的时间是{{date}}</p>
</div>
</template>
 
<script>
import mycomponent1 from "./components/mycomponent1.vue"
import component2 from "./components/component2.vue"
//引用组件的步骤：1.import 名字 from 路径 2.在components中引用名字 3.将名字作为标签引用 <component />
export default {
  name: 'App',
  components:{
    mycomponent1,
    component2,
  },
  data(){
        return{
            title:"标题",/*在组件标签上可以直接传递变量*/
            age:11,
            names:['aimy','elma'],
            date:""
        }
  },
  methods:{
    getmsgfrommycom(data  ){
      this.date=data[0];
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
