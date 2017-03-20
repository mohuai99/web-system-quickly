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
                <button @click="clickme">clickme</button>
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
                msg: 'Welcome to Manage Index',
                sql: ''
            }
        },
        methods: {
            clickme() {
                this.post('http://localhost:8080/api/list', {
                    name: 'wsq'
                })
            },
            post(url, json, callback) {
                fetch(url, {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(json)
                }).then(function(res) {
                    res.json().then(function(data) {
                        console.log(data)
                    })
                })
            }
        }
    }
</script>

<style>
    .body {
        height: 100%;
        width: 100%;
        background-color: #f7f7f7;
    }
    .header {
        background-color: #6dad01;
        height: 60px;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        text-align: left;
        line-height: 60px;
    }
    .logo {
        margin-left: 40px;
        vertical-align: middle;
    }
    .leftside {
        background-color: #f7f7f7;
        width: 260px;
        position: absolute;
        left: 0;
        right: 0;
        top: 60px;
        bottom: 0;
        margin: 0px;
    }
    .main {
        background-color: #f7f7f7;
        position: absolute;
        left: 260px;
        right: 0;
        top: 60px;
        bottom: 0;
        margin: 0px;
    }
    .content {
        height: 90%;
        margin: 12px 14px 0 0;
        background-color: #fff;
        border: solid 1px #eee;
        border-radius: 3px;
        text-align: left;
        padding: 12px;
    }
</style>
