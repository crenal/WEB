import { createRouter, createWebHashHistory } from 'vue-router'
import Homeview from "../view/Homeview.vue"
import Aboutview from "../view/Aboutview.vue"
//引入
//创建路由
//配置信息需要页面的相关配置
const routes = [
    {
        path:"/" ,//路径
        component:Homeview
    },
    {
        path:"/about",
        component:Aboutview,
        children:[
            {
                path:'us',
                component:()=>import("../view/aboutdetails/aboutus.vue")
            },
            {
                path:'info',
                component:()=>import("../view/aboutdetails/redetails.vue")
            },
        ]
    },
    {
        path:"/details/:name",
        name:"details",
        component: ()=>import("../view/Details.vue")                
    }
    
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;