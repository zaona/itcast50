import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/Home'
import User from '@/views/user/user'
import Rights from '@/views/rights/Rights'
import Categories from '@/views/goods/Categories'
import Goods from '@/views/goods/goods'
import GoodsAdd from '@/views/goods/goodsAdd'
import { Message } from 'element-ui'
import Roles from '@/views/rights/roles'
Vue.use(Router)
const router = new Router({
  routes: [
    {name: '/', path: '/', redirect: {name: 'login'}},
    {name: 'login', path: '/login', component: Login},
    {name: 'home',
      path: '/home',
      component: Home,
      children: [
        {
          name: 'user', path: '/user', component: User
        },
        { name: 'rights', path: '/rights', component: Rights},
        { name: 'categories', path: '/categories', component: Categories},
        { naem: 'goods', path: '/goods', component: Goods},
        { name: 'goodsadd', path:'/goodsadd', component:GoodsAdd},
        { name: 'roles', path:'/roles', component: Roles}
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // 判断有没有token
  if (to.name === 'login') {
    next();
  } else {
    // 判断有没有token
    const token = sessionStorage.getItem('token');
    if (token) {
      next();
    } else {
      // 没有token，跳转到登录
      // this不是vue的实例
      // this.$router.push('/login');
      router.push('/login');
      // 提示
      // this不是vue的实例
      // this.$message.warning('请先登录');
      Message.warning('请先登录');
    }
  }
})
export default router
