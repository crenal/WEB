<template>
<div>
    <h3>从父组件传递来的数据</h3>
    <p>{{title}}</p>
    <p>age={{age}}</p>
    <ul>
        <li v-for="(name,index) in names" :key="index">{{name}}</li>
    </ul>
    <h3>向父组件传递数据</h3>
    <p>输入时间:<input type="text" v-model.lazy="message"></p>
    <button @click="sndmsg"> 点击传递 </button>
</div>
</template>


<script>
export default {
    name:"mycomponent1",
    //props是从外部传入参数的变量,即父组件->子组件
    props:{
        title:{
            type:String,//type:{String,Number,Boolean,Array,Object,Function}
            default:""
        },
        age:{
            type:Number,
            default:""
        },
        names:{
            type:Array,
            //数组和对象形props默认值要用函数返回
            default:function(){
                return[]
            }
        }
    },
    data(){
        return{
            message:"11.16",
        }
    },
    methods:{
        sndmsg(){
            //emit可以向父组件返回信息 参数1:字符串，在父组件的视角是一个事件的名字 参数2：传递的数据
            //可以有参数2,3,4 接受端可以用arguments作为接受数组后调用
            this.$emit("onEvent",this.message);
            //console.log(this.message)
        }
    }

}
</script>


<style scoped>
/*scoped表示只作用于当前组件*/
</style>
