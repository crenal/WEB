<template>

    <div class="hello">
        <div class='1'>
            <h3>基础语法</h3>
            <p>{{message}}</p>
            <p v-html="rawHtml"></p>
            <p><a href='http://81.68.231.130:4005/'>垃圾堆小站</a></p>
            <div :id="dynamicID"></div> 
            <p>{{num+10}}</p>
        </div>

        <div class='2'>
            <h3>条件渲染</h3>
            <p v-if="flag">我是傻逼.</p>
            <p v-else>你是傻逼.</p>
            <p v-show="!flag">你是傻逼.</p>
        </div>

        <div class='3'>
            <h3>列表渲染</h3>
            <ul>
                <li @click="ClickItem(item.title)" v-for="item in lists" :key="item.id">  {{item.title }}</li>
            </ul>
        </div>

        <div class='4'>
            <h3>事件处理</h3>
            <button @click="counter += 1">点击:{{counter}}</button>
            <button @click="clickHandle">按钮</button>
            <button @click="say(hi)">say hi</button>
            <button @click="say(what)">say what</button>
            <p>{{message2}}</p>
        </div>

       <div class='5'>
            <h3>输入表单</h3>
            <input type="text" v-model.lazy="username">
            <input type="text" v-model.trim="password">
            <p>用户名：{{username}},密码：{{password}}</p>
            <button @click="deliver">提交</button>
        </div>
    </div>
</template>

<script>
export default{
    name:"Helloworld",
    data(){
        return{
            message:"学习Vue",//在template中引用变量用{{}} 双花括号里可以写表达式，双目运算符
            rawHtml:"<a href='http://81.68.231.130:4005/'>垃圾堆小站</a>",//在任何标签中都可以引用变量，用指令v-xxx： 
            dynamicID:10001,                                             //v-html  在标签里使用html语句
            num:10,                                                      //v-if(else) v-show  条件性显示
            flag:0 ,                                                      //v-bind:简写为:
            lists:[                                                       //v-for  列表 配合html的<ul>和<li>使用 :key=设置元素的索引
                {                                                         //v-on(简写为@)监听事件（click等事件）
                    id:1,                                                 //v-model 在input标签中绑定变量（双向绑定）.lazy:回车时获得数据
                    title:"皮皮虾"                                        //                                       .trim:删除左右两端的空格
                },
                {
                    id:2,
                    title:"跳跳虎"
                },
                {
                    id:3,
                    title:"米老鼠"
                }
            ],        
            counter:1,     
            message2:"消息通知",
            username:"",   
            password:""                                         
       }     
    },
    methods:{
        clickHandle(event){               //在事件中读取data中的变量，是需要通过this.变量读取的
            this.message2 = '消息变化了';
            console.log(event);
        },
        say(msg){
            console.log(data)
        },
        ClickItem(msg){
            console.log(msg)
        },
        deliver(){
            console.log(this.username)
            console.log(this.password)
        }

    }
}
</script>
