<template>
    <div class="body">
        <div class="header">
            <img src="../../static/images/logo.png" alt="logo" class="logo">
        </div>
        <div class="leftside">
            <wsq-menu></wsq-menu>
        </div>
        <div class="main">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from './components/menu'
    export default {
        name: 'manage',
        components: {
            'wsq-menu': Menu
        },
        data() {
            return {
                sql: ''
            }
        },
        methods: {}
    }
</script>

<style>
    .body {
        height: 100%;
        width: 100%;
    }
    .header {
        background-color: #f3f3f4;
        border-bottom: solid 2px #2f4050;
        height: 60px;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        text-align: left;
        line-height: 60px;
        box-sizing: border-box;
    }
    .logo {
        margin-left: 40px;
        vertical-align: middle;
    }
    .leftside {
        width: 220px;
        position: absolute;
        left: 0;
        right: 0;
        top: 60px;
        bottom: 0;
        margin: 0px;
    }
    .main {
        position: absolute;
        left: 220px;
        right: 0;
        top: 60px;
        bottom: 0;
        margin: 0px;
        background-color: #f7f7f7;
    }
    .content {
        height: 90%;
        margin: 12px 14px 0 0;
        background-color: #fff;
        border-radius: 3px;
        text-align: left;
        padding: 12px;
        background-color: #f7f7f7;
    }
</style>
