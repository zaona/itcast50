import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/Home'
import User from '@/views/user/user'
import Rights from '@/views/rights/Rights'
Vue.use(Router)

export default new Router({
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
        { name: 'rights', path: '/rights', component: Rights}
      ]
    }
  ]
})
