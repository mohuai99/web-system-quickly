<template>
    <div class="page">
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>内容管理</el-breadcrumb-item>
                <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <wsq-list :colLists="colLists" :tableData="tableData" :pagerOp="pagerOp" @editClick="editClick" @deleteClick="deleteClick" @changePageSize="changePageSize" @changeCurrPage="changeCurrPage"></wsq-list>
        <div class="pagerbar">
            <wsq-pager :currentPage="pagerOp.currentPage" :pageSizes="pagerOp.pageSizes" :currPageSize="pagerOp.currPageSize" :total="pagerOp.total" @changePageSize="changePageSize" @changeCurrPage="changeCurrPage"></wsq-pager>
        </div>
        <el-dialog title="收货地址" v-model="dialogFormVisible">
            <news-edit :newsForm="newsForm" :rules="rules" ></news-edit>
        </el-dialog>
    </div>
</template>

<script>
    import List from '../components/list'
    import Edit from './edit'
    import Pager from '../components/pagination'
    import Http from '../../assets/util/http'
    export default {
        name: 'news',
        data() {
            return {
                dialogFormVisible: false,
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
                tableData: [],
                newsForm: {
                    title: '',
                    author: '',
                    source: '',
                    class_id: '',
                    islock: false,
                    isnew: false,
                    istop: false,
                    ishot: false,
                    lang: '',
                    summary: '',
                    content: ''
                },
                rules: {
                    title: [{
                        required: true,
                        message: '请输入活动名称',
                        trigger: 'blur'
                    }, {
                        min: 3,
                        max: 50,
                        message: '长度在 3 到 50 个字符',
                        trigger: 'blur'
                    }],
                    newsClass: [{
                        required: true,
                        message: '请选择活动区域',
                        trigger: 'change'
                    }],
                    content: [{
                        required: true,
                        message: '请填写新闻内容',
                        trigger: 'blur'
                    }]
                },
                pagerOp: {
                    currentPage: 1,
                    pageSizes: [5, 10, 20, 50],
                    currPageSize: 5,
                    total: 1
                }
            }
        },
        components: {
            'wsq-list': List,
            'news-edit': Edit,
            'wsq-pager': Pager
        },
        mounted: function() {
            const url = '/news/total/'
            Http.get(url, (data) => {
                const [{total}] = data.data
                this.pagerOp.total = total
                this.getNewsList()
            })
        },
        methods: {
            editClick(index, row) {
                this.newsForm = Object.assign(this.newsForm, row)
                this.dialogFormVisible = true
            },
            deleteClick(index, row) {
                const url = '/news/hide/',
                    {id} = row
                Http.post(url, [id], (data) => {
                    if (data.code === 200) {
                        this.tableData.splice(index, 1)
                        this.$message.success('数据删除成功！')
                    } else {
                        this.$message.error(data.msg);
                    }
                })
            },
            changePageSize(pageSize) {
                this.pagerOp.currPageSize = pageSize
                this.getNewsList()
            },
            changeCurrPage(currPage) {
                this.pagerOp.currentPage = currPage
                this.getNewsList()
            },
            getNewsList() {
                const url = '/news/lists/?currpage=' + this.pagerOp.currentPage + '&pagesize=' + this.pagerOp.currPageSize
                Http.get(url, (data) => {
                    if (data.code === 200) {
                        this.tableData = data.data
                    } else {
                        this.$message.error('获取新闻列表失败！')
                    }
                })
            }
            // TODO List
            // 1, 编辑功能；
            // 2，预览的地址；延后
            // 3，个性化配置列；
            // 4，工具栏：批量删除、全屏；
            // 5，分页功能；√
            // 6，新闻列表 sql 语句的优化；√
            // 7，新增页面富文本编辑框引入；
            // 8，数据安全性；
            // 9，页面性能优化；
        }
    }
</script>

<style scoped>
    .page{
        margin: 0px 12px;
    }
</style>
