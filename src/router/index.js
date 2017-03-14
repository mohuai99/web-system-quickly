import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Manage from '@/sysmanage/Manage'
import News from '@/sysmanage/news/news'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/manage',
        name: 'Manage',
        component: Manage,
        children: [{
            path: '/news',
            name: 'news',
            component: News
        }]
    }]
})
