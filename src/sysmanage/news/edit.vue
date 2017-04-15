<template>
    <div class="page">
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
                <el-form-item label="新闻类别" prop="class_id">
                    <el-select v-model="newsForm.class_id" placeholder="请选择新闻类别">
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
                        <el-radio>中文</el-radio>
                        <el-radio>英文</el-radio>
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
    export default {
        name: 'edit',
        props: ['newsForm', 'rules'],
        data() {
            return {
                labelWidth: '100px',
                labelPosition: 'right'
            };
        },
        methods: {
            submitForm(formName) {
                this.$emit('updateNews', formName)
            }
        }
    }
</script>

