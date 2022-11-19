//这里封装网络请求的api

import axios from "../utils/requests"//这里引入了增加了拦截器的axios
import  path from "./path"//引入预定义的路径
//定义网络请求函数
const api = {
    getChengpin(){
        return axios.get(path.baseUrl + path.chengpin)
    },
    login(){
        return axios.post(path.baseUrl + path.log,{
            user_id:"iwen@qq.com",
            password:"iwen123",
            verification_code:"crfvw"
        })
    }
}
export default api;