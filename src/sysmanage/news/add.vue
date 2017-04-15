<template>
    <div class="pager">
        <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/news' }">新闻管理</el-breadcrumb-item>
                <el-breadcrumb-item>新闻发布</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="formPage">
            <el-form :model="newsForm" :rules="rules" ref="newsForm" :label-position="labelPosition" :label-width="labelWidth" class="elForm">
                <el-form-item label="新闻标题" prop="title">
                    <el-input v-model="newsForm.title" placeholder="新闻标题"></el-input>
                </el-form-item>
                <el-form-item label="新闻作者" prop="author">
                    <el-input v-model="newsForm.author" placeholder="新闻作者"></el-input>
                </el-form-item>
                <el-form-item label="新闻来源" prop="source">
                    <el-input v-model="newsForm.source" placeholder="新闻来源"></el-input>
                </el-form-item>
                <el-form-item label="新闻类别" prop="newsClass">
                    <el-select v-model="newsForm.newsClass" placeholder="请选择新闻类别">
                        <el-option label="企业新闻" value="1"></el-option>
                        <el-option label="行业新闻" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否锁定" prop="islock">
                    <el-switch on-text="" off-text="" v-model="newsForm.islock"></el-switch>
                </el-form-item>
                <el-form-item label="新闻标签" prop="type">
                    <el-checkbox v-model="newsForm.isnew">最新</el-checkbox>
                    <el-checkbox v-model="newsForm.istop">置顶</el-checkbox>
                    <el-checkbox v-model="newsForm.ishot">热门</el-checkbox>
                </el-form-item>
                <el-form-item label="语言类别" prop="lang">
                    <el-radio-group v-model="newsForm.lang">
                        <el-radio label="1">中文</el-radio>
                        <el-radio label="2">英文</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="新闻摘要" prop="summary">
                    <el-input type="textarea" v-model="newsForm.summary"></el-input>
                </el-form-item>
                <el-form-item label="新闻内容" prop="content">
                    <el-input type="textarea" v-model="newsForm.content"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('newsForm')">发布新闻</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Http from '../../assets/util/http'
    export default {
        name: 'add',
        data() {
            return {
                labelWidth: '180px',
                labelPosition: 'right',
                newsForm: {
                    title: '新闻测试',
                    author: 'wsq',
                    source: 'e7gd.com',
                    newsClass: '1',
                    islock: false,
                    isnew: true,
                    istop: false,
                    ishot: false,
                    lang: '1',
                    summary: '新闻摘要测试',
                    content: '新闻内容测试'
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
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const url = '/news/add/',
                            obj = {};
                        Http.post(url, Object.assign(obj, this.newsForm), (data) => {
                            if (data.code === 200) {
                                this.$message.success('新闻发布成功！');
                            } else {
                                this.$message.error(data.msg);
                            }
                        })
                    } else {
                        this.$message.error('请确认带 * 号内容都已填写正确！');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
    .formPage{
        width:80%
    }

    .el-date-editor.el-input{
        width: 200px;
    }
</style>
