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
                    field: 'title',
                    label: '标题',
                    width: '180'
                }, {
                    field: 'author',
                    label: '作者',
                    width: '120'
                }, {
                    field: 'click_num',
                    label: '浏览数',
                    width: '120'
                }, {
                    field: 'time',
                    label: '发布日期'
                }],
                tableData: []
            }
        },
        components: {
            'wsq-list': List
        },
        mounted: function() {
            var me = this,
                url = 'news/lists/'
            Http.get(url, function(data) {
                if (data.code === 200) {
                    me.tableData = data.data
                } else {
                    me.$message.error('获取新闻列表失败！')
                }
            })
        }
    }
</script>

<style scoped>
    .pager{
        margin: 0px 12px;
    }
</style>
