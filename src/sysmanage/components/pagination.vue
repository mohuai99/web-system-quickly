<template>
    <div class="pagerbox">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes" :page-size="currPageSize" layout="prev, pager, next, sizes" :total="total"></el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'pagination',
        props: ['currentPage', 'pageSizes', 'currPageSize', 'total'],
        methods: {
            handleSizeChange: function(pageSize) {
                this.$emit('changePageSize', pageSize)
            },
            handleCurrentChange: function(currPage) {
                this.$emit('changeCurrPage', currPage)
            }
        }
    }
</script>

<style scoped>
    .pagerbox{
        margin-top: 20px;
        margin-left: -4px;
    }
</style>
