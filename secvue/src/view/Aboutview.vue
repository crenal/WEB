

<template>
<div>
    <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
   </el-row>
    <ul>
        <!--
        <li><router-link to="/details/link1">link1</router-link></li>
        <li><router-link to="/details/link2">link2</router-link></li>
        <li><router-link to="/details/link3">link3</router-link></li> -->
        
        <router-link to="/about/us">关于我们</router-link>
        <router-link to="/about/info">关于信息</router-link>
        <router-view></router-view>
    </ul>
</div>
</template>