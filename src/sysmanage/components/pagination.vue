<template>
    <div class="pagerbox">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="sizes, prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'pagination',
        data() {
            return {
                currentPage: 5
            }
        },
        methods: {
            handleSizeChange: function() {
            },
            handleCurrentChange: function() {
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
