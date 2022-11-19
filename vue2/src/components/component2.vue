<template>
<div>
    <h3>生命周期函数</h3>
    <p>{{message}}</p>
    <button @click="message='更新数据'">点击更新</button>
    <h3>swiper组件</h3>
     <div class="hello">
    <swiper class="mySwiper">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
  </div>
</div>
</template>


<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
    name:"component2",
    components:{
        Swiper,
        SwiperSlide
    },
    mounted() {
       new Swiper('.swiper', {
          direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
            
          // 如果需要分页器
          pagination: {
             el: '.swiper-pagination'
          },
 
          // 如果需要前进后退按钮
          navigation: {
             nextEl: '.swiper-button-next',
             pervEl: '.swiper-button-prev'   
          },
 
          // 如果需要滚动条
          scrollbar: {
              el: '.swiper-scrollbar'
          }
        })
      },
    data(){
        return{
            message:"",
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
/*scoped表示只作用于当前组件*/
</style>
