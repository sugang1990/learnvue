import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import home from '@/page/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: home
    },
    { path: '/',
      redirect: '' },
    {
      path: '/testAjax',
      component: r => require.ensure([], () => r(require('@/page/testAjax')), 'testAjax')
    }, {
      path: '/b',
      component: r => require.ensure([], () => r(require('@/page/b')), 'jnb')
    }, {
      path: '/pay',
      component: r => require.ensure([], () => r(require('@/page/pay/index')), 'pay')
    }
  ]
})
