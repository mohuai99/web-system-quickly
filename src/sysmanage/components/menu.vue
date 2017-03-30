<template>
    <div class="menu">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :router="isRouter" :unique-opened="true">
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
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title"><i class="el-icon-menu"></i>导航二</template> 
                <el-menu-item-group>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项3</el-menu-item>
                    <el-menu-item index="4-4">选项1</el-menu-item>
                    <el-menu-item index="4-5">选项2</el-menu-item>
                    <el-menu-item index="4-6">选项3</el-menu-item>
                    <el-menu-item index="4-7">选项1</el-menu-item>
                    <el-menu-item index="4-8">选项2</el-menu-item>
                    <el-menu-item index="4-9">选项3</el-menu-item>
                    <el-menu-item index="4-10">选项1</el-menu-item>
                    <el-menu-item index="4-11">选项1</el-menu-item>
                    <el-menu-item index="4-12">选项2</el-menu-item>
                    <el-menu-item index="4-13">选项3</el-menu-item>
                    <el-menu-item index="4-6">选项3</el-menu-item>
                    <el-menu-item index="4-7">选项1</el-menu-item>
                    <el-menu-item index="4-8">选项2</el-menu-item>
                    <el-menu-item index="4-9">选项3</el-menu-item>
                    <el-menu-item index="4-10">选项1</el-menu-item>
                    <el-menu-item index="4-11">选项1</el-menu-item>
                    <el-menu-item index="4-12">选项2</el-menu-item>
                    <el-menu-item index="4-13">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    <el-menu-item index="5-3">选项3</el-menu-item>
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
            handleOpen: function(index, path) {
                console.log(index + '==' + path)
            },
            handleClose: function() {

            }
        }
    }
</script>

<style >
    .menu{
        width:220px;
        height: 100%;
        margin: 0;
        background-color: #2f4050;
        text-align: left;
        padding: 0px;
        overflow-y: auto; 
    }

    .menu .el-menu{
        background:transparent;
    }

    .el-menu .el-submenu, .el-menu .el-menu-item{
        margin-bottom: 0px;
    }

    .el-menu .el-menu-item, .el-menu .el-submenu__title{
        height: 46px;
        line-height: 46px;
    }

    .el-menu .el-submenu {
        color:#999;
    }

    .el-menu .el-submenu.is-opened{
        background-color: #293846;
    }

    .el-menu .el-submenu.is-opened .el-submenu__title{
        color: #fff;
    }

    .el-menu .el-submenu .el-menu-item-group{
        padding: 0;
        background-color: #293846;
    }

    .el-menu .el-submenu .el-menu-item-group .el-menu-item-group__title{
        padding-top:0;
    }

    .el-menu .el-submenu .el-menu-item{
        color: #999;
        border-radius: 0;
        margin-bottom: 0;
        height: 42px;
        line-height: 42px;
    }

    .el-menu .el-submenu .el-menu-item.is-active{
        color: #fff;
    }

     .el-menu .el-submenu .el-submenu__title,.el-menu .el-menu-item{
         color:#999;
     }

    .el-menu .el-menu-item:hover, 
    .el-menu .el-submenu:hover, 
    .el-menu .el-submenu .el-submenu__title:hover{
        background-color: #293846;
        color:#fff;
    }

    .el-menu .el-submenu .el-menu-item:hover{
        border-radius: 0px;
        background-color: #293846;
        color:#fff;
    }
</style>

