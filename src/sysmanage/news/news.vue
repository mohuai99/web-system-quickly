<template>
    <div class="pager">
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>内容管理</el-breadcrumb-item>
                <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <wsq-list></wsq-list>
    </div>
</template>

<script>
    import List from '../components/list'
    export default {
        name: 'news',
        data() {
            return {
                msg: 'Welcome to news list'
            }
        },
        components: {
            'wsq-list': List
        }
    }
</script>

<style scoped>
    .pager{
        margin: 14px;
    }
    .breadcrumb{
        padding-bottom: 20px;
        border-bottom: solid 1px #ccc;
    }
</style>
