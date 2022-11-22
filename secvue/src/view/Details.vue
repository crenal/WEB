<template>
<div>
    <h3>页面详情 </h3>
  
    <p>{{ $route.params.name}}</p>
</div>
</template>

<script>

export default ({

    name:'Details',
    data(){
        return{
        }
    },
    props:{
        msg:{
            type:String,
            default:"无"
        }
    }
})
</script>
