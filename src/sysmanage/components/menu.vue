<template>
    <div class="menu">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="isRouter">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>新闻管理</template>
                <el-menu-item-group>
                    <el-menu-item index="/news">新闻列表</el-menu-item>
                    <el-menu-item index="1-2">发布新闻</el-menu-item>
                    <el-menu-item index="1-3">新闻类别管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'menu',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                isRouter: true
            }
        },
        methods: {
            handleOpen: function() {

            },
            handleClose: function() {

            }
        }
    }
</script>

<style >
    .menu{
        width:210px;
        height: 90%;
        margin: 12px 14px 0;
        background-color: #fff;
        border: solid 1px #eee;
        border-radius: 3px;
        text-align: left;
        padding: 12px;
    }

    .menu .el-menu{
        background-color: #fff;
    }

    .el-menu .el-submenu, .el-menu .el-menu-item{
        background-color: #fff;
        margin-bottom: 12px;
    }

    .el-menu .el-menu-item, .el-menu .el-submenu__title{
        height: 36px;
        line-height: 36px;
        background-color: #508101;
    }

    .el-menu .el-submenu {
        color:#fff;
    }

    .el-menu .el-submenu .el-menu-item-group{
        padding: 12px 0 20px;
        background-color: #fff;
    }

    .el-menu .el-submenu .el-menu-item-group .el-menu-item-group__title{
        padding-top:0;
    }

    .el-menu .el-submenu .el-menu-item{
        background-color: #fff;
        border-bottom: dotted 1px #ccc;
        color: #666;
        border-radius: 0;
        margin-bottom: 0;
        height: 32px ;
        line-height: 32px;
    }

     .el-menu .el-submenu .el-submenu__title,.el-menu .el-menu-item{
         color:#fff;
     }

    .el-menu .el-menu-item:hover, 
    .el-menu .el-submenu:hover, 
    .el-menu .el-submenu .el-submenu__title:hover{
        background-color: #508101;
    }

    .el-menu .el-submenu .el-menu-item:hover{
        border-radius: 0px;
        background-color: #F9F9F9;
        color:#508101;
    }
</style>

