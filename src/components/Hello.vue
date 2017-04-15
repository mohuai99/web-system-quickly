<template>
    <div class="hello">
        <ul>
            <li>
                <router-link to="manage">{{$wsq_i18n('$i18n.manage')}}</router-link>
            </li>
        </ul>
        <div class="box">
            <div class="resizebtn"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            let dom = this.$el.querySelector('div.resizebtn')
            console.log(dom)
            this.bindResize(dom)
        },
        methods: {
            onResize(e) {
            },
            bindResize(dom) {
                var oDiv = this.$el.querySelector('div.resizebtn')
                var oDiv2 = this.$el.querySelector('div.box')
                oDiv.onmousedown = function(ev) {
                    var oEvent = ev || event
                    var disX = oEvent.clientX - oDiv.offsetLeft
                    var disY = oEvent.clientY - oDiv.offsetTop
                    document.onmousemove = function(ev) {
                        var oEvent = ev || event
                        oDiv2.style.width = oEvent.clientX - disX + oDiv.offsetWidth + 'px'
                        oDiv2.style.height = oEvent.clientY - disY + oDiv.offsetHeight + 'px'
                    }
                    document.onmouseup = function() {
                        document.onmousemove = null
                        document.onmouseup = null
                    }
                    return false
                }
            },
            unBindResize(dom) {
                if (this.onResize) {
                    dom.removeEventListener('resize', this.onResize)
                }
            }
        },
        beforeDestroy() {
            let dom = this.$el.querySelector('div.resizebtn')
            this.unBindResize(dom)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }

    .box{width: 200px; height: 200px; position: relative; border:solid 1px #ccc; resize: both;}
    .box .resizebtn{
        width: 14px;
        height: 14px;
        background-color: #f00;
        position: absolute;
        bottom:0;
        right:0;
    }
    .box .resizebtn:hover{
        cursor: nw-resize;
    }
</style>
