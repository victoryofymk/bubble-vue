import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/Layout.vue';
import JobManager from './views/JobManager.vue';
import test from './views/test.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Layout,
        },
        {
            path: '/JobManager',
            name: 'JobManager',
            component: JobManager,
        },
        {
            path: '/Layout',
            name: 'Layout',
            component: Layout,
        },
        {
            path: '/test',
            name: 'test',
            component: test,
        }
    ],
});
