<template>
<div>
    <h3>生命周期函数</h3>
    <p>{{message}}</p>
    <button @click="message='更新数据'">点击更新</button>
    <h3>swiper组件</h3>
    <div class="hello">
    <swiper class="mySwiper" :modules="modules" :pagination="{ clickable: true }">
      <swiper-slide>
        <img src="../assets/1.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/1.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/1.jpeg" alt="">
      </swiper-slide>
    </swiper>
  </div>
</div>
</template>


<script>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
    name:"component2",
    components:{
        Swiper,
        SwiperSlide
    },
    data(){
        return{
            message:"",
            modules: [ Pagination ]
        }
    },
    //生命周期函数 共8个：
    beforeCreate(){
        console.log("beforeCreate:组件创建之前")
    },
    created(){
        console.log("created:组件创建完成")
    },
    beforeMount(){
        console.log("beforeMount:渲染之前")
    },
    mounted(){
        console.log("mounted:组件渲染完成")
        //把网络请求写在这里,在组件创建完后慢慢渲染
    },
    beforeUpdate(){
        console.log("beforeUpdate:组件更新之前")
    },
    updated(){
        console.log("updated:组件更新完成")
    },
    BeforeUnmount(){
        console.log("BeforeUnmount:组件卸载之前")
        //卸载之前，把消耗性能的都杀了
    },
    unmounted(){
        console.log("unmounted:组件卸载完成")
    }

}
</script>


<style scoped>
image{
    width:100%,
}
/*scoped表示只作用于当前组件*/
</style>
