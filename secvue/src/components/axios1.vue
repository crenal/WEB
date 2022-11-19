
<template>
    <div>
        <p>axios示例</p>
        <p>{{chengpin.title}}</p>
    </div>
</template>
<script>
import axios from "axios"
import querystring from "querystring"
import api from "../api/index"
export default {
    name:'axios1',
    data(){
        return{
            chengpin:{},
        }
    },
    mounted(){
        console.log("mounted:组件渲染完成")
        //把网络请求写在这里,在组件创建完后慢慢渲染
        //get请求方式
        axios({
            method: "get",
            url:"http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
        }).then(res =>{
            this.chengpin=(res.data.chengpinDetails[0])
        })

        //post请求方式
        //用querystring.stringify方法处理post请求的格式
        axios({
            method:"post",
            url:"http://iwenwiki.com/api/blueberrypai/login.php",
            data:querystring.stringify({
                user_id:"iwen@qq.com",
                password:"iwen123",
                verification_code:"crfvw"
            })
        }).then(res =>{
            console.log(res.data)
        })
        //用封装的api进行请求
        api.getChengpin().then(res =>{
            console.log(res.data)
        })
        api.login().then(res =>{
            console.log(res.data)
        })
    },
}
</script>
