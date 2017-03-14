<template>
    <div class="listbox">
        <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column fixed="left" type="index" width="55"></el-table-column>
            <!--el-table-column fixed="left" v-show="false" type="selection" width="55"></el-table-column-->
            <el-table-column prop="name" label="姓名" width="100"></el-table-column>
            <el-table-column prop="province" label="省份" width="100"></el-table-column>
            <el-table-column prop="city" label="市区" width="100"></el-table-column>
            <el-table-column prop="address" label="地址" ></el-table-column>
            <el-table-column prop="zip" label="邮编" width="100"></el-table-column>
            <el-table-column prop="date" label="日期" width="120"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
                <template scope="scope">
                    <router-link class="el-button el-button--text el-button--small" to="manage">预览</router-link>
                    <el-button @click.native.prevent="editRow(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">移除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagerbar">
            <wsq-pager></wsq-pager>
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
        mounted: {
            post('list', {name: wsq}, function(data){
                console.log(data)
                this.tableData = [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }]
            })
        },
        data() {
            return {
                msg: 'Welcome to list components',
                tableData: []
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val
            },
            editRow(index, row) {
                console.log(index, row)
            },
            deleteRow(index, row) {
                console.log(index, row)
            },
            post(url, json, callback) {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    body: JSON.stringify(json);
                })
                .then(function(data){
                    callback(data)
                    console.log(data)
                })
            }
        }
    }
</script>
