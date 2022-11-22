import {createStore} from "vuex"
//vuex的核心作用就是管理组件之间的状态
export default  createStore({
    //所有的变量都存在state里
    state:{
        count:2,
    },
    //对变量进行过滤
    getters:{
        getconut(state){
            return state.count > 0 ? state.count :'数据异常'
        }
    },
    //更改state中数据的唯一方法：
    mutations:{
        addCount(state){
            state.count++
        },
        setCounter(state,data){
            state.count+=data
        }
    },
    //异步操作
    actions:{
        asyncSetCount({ commit }){
            axios.get("http://iwenwiki.com/api/generator/list.php")
            .then(res =>{
              commit("setCounter",res.data[0])
            })
          }
    },
    modules:{

    },
})
