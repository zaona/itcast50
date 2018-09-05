// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/style.css'
import http from '@/plugins/http.js'
import moment from 'moment'
Vue.config.productionTip = false

Vue.filter('fmtData', (value,fmtstr) => {
  return moment(value).format(fmtstr)
})
Vue.use(ElementUI)
Vue.use(http)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
