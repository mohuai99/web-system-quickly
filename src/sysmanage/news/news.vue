<template>
    <div class="pager">
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>内容管理</el-breadcrumb-item>
                <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <wsq-list :colLists="colLists" :tableData="tableData"></wsq-list>
    </div>
</template>

<script>
    import List from '../components/list'
    import Http from '../../assets/util/http'
    export default {
        name: 'news',
        data() {
            return {
                colLists: [{
                    field: 'name',
                    label: '姓名'
                }, {
                    field: 'address',
                    label: '地址'
                }, {
                    field: 'date',
                    label: '日期'
                }],
                tableData: []
            }
        },
        components: {
            'wsq-list': List
        },
        mounted: function() {
            var me = this,
                url = 'news/lists/',
                obj = {}
            Http.post(url, obj, function(data) {
                if (data.code === 200) {
                    me.tableData = data.rows
                } else {
                    me.$message.error('获取新闻列表失败！')
                }
            })
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
