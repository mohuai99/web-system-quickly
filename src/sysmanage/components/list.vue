<template>
    <div class="listbox">
        <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column fixed="left" type="index" width="55"></el-table-column>
            <el-table-column fixed="left" v-show="false" type="selection" width="55"></el-table-column>
            <el-table-column v-for="item in colLists" :prop="item.field" :label="item.label" :width="item.width" :sortable="item.sort"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
                <template scope="scope">
                    <router-link class="el-button el-button--text el-button--small" to="/">预览</router-link>
                    <el-button @click.native.prevent="editRow(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagerbar">
            <wsq-pager></wsq-pager>
            {{multipleSelection}}
        </div>
    </div>
</template>

<script>
    import Pager from './pagination'
    export default {
        name: 'list',
        components: {
            'wsq-pager': Pager
        },
        props: ['tableData', 'colLists', 'routerPage'],
        data() {
            return {
                multipleSelection: []
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val
            },
            editRow(index, row) {
                this.$emit('editClick', index, row)
                // console.log(index, row)
            },
            deleteRow(index, row) {
                this.$emit('deleteClick', index, row)
            }
        }
    }
</script>
<style scoped>
    .listbox{
        margin: 12px auto;
    }
</style>
