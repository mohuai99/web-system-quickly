<template>
    <div class="pager">
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>内容管理</el-breadcrumb-item>
                <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <wsq-list :colLists="colLists" :tableData="tableData" @editClick="editClick" @deleteClick="deleteClick"></wsq-list>
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
                    sort: true
                }, {
                    field: 'author',
                    label: '作者',
                    width: '120'
                }, {
                    field: 'click_num',
                    label: '浏览数',
                    width: '100',
                    sort: true
                }, {
                    field: 'time',
                    label: '发布日期',
                    width: '120'
                }],
                tableData: []
            }
        },
        components: {
            'wsq-list': List
        },
        mounted: function() {
            const url = 'news/lists/'
            Http.get(url, (data) => {
                if (data.code === 200) {
                    this.tableData = data.data
                } else {
                    this.$message.error('获取新闻列表失败！')
                }
            })
        },
        methods: {
            editClick(index, row) {
                alert(index)
            },
            deleteClick(index, row) {
                const url = '/news/hide/',
                    {id} = row
                Http.post(url, [id], (data) => {
                    if (data.code === 200) {
                        this.tableData.splice(index, 1)
                        this.$message.success('数据删除成功！');
                    } else {
                        this.$message.error(data.msg);
                    }
                })
            }
            // TODO
            // 1,编辑功能； 2，预览的地址； 3，个性化配置列； 4，工具栏：批量删除、全屏； 5，分页功能； 6，新闻列表 sql 语句的优化； 7，新增页面富文本编辑框引入； 8，数据安全性； 9，页面性能优化；
        }
    }
</script>

<style scoped>
    .pager{
        margin: 0px 12px;
    }
</style>
