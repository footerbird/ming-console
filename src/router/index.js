import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/components/layout/Layout';

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/Overview'),
                    name: 'overview',
                    meta: { title: '控制台', module: '/' }
                }
            ]
        },
        {
            path: '/my_brand',
            component: Layout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/MyBrand'),
                    name: 'my_brand',
                    meta: { title: '品牌管理', module: '/my_brand'}
                }
            ]
        },
        {
            path: '/my_domain',
            component: Layout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/MyDomain'),
                    name: 'my_domain',
                    meta: { title: '域名管理', module: '/my_domain' }
                },
                {
                    path: 'transfer',
                    component: () => import('@/views/MyDomainTransfer'),
                    name: 'my_domain_transfer',
                    meta: { title: '域名转入', module: '/my_domain' }
                }
            ]
        },
        {
            path: '/my_mark',
            component: Layout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/MyMark'),
                    name: 'my_mark',
                    meta: { title: '商标管理', module: '/my_mark' }
                }
            ]
        },
        {
            path: '/my_order',
            component: Layout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/MyOrder'),
                    name: 'my_order',
                    meta: { title: '订单管理', module: '/my_order'}
                },
                {
                    path: '/my_cart',
                    component: () => import('@/views/MyCart'),
                    name: 'my_cart',
                    meta: { title: '购物车', module: '/my_order'}
                },
                {
                    path: '/my_invoice',
                    component: () => import('@/views/MyInvoice'),
                    name: 'my_invoice',
                    meta: { title: '发票管理', module: '/my_order'}
                }
            ]
        },
        {
            path: '/my_message',
            component: Layout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/MyMessage'),
                    name: 'my_message',
                    meta: { title: '消息中心', module: '/my_message'}
                }
            ]
        },
        {
            path: '/my_account',
            component: Layout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/MyAccount'),
                    name: 'my_account',
                    meta: { title: '账户管理', module: '/my_account'}
                }
            ]
        }
    ]
})
