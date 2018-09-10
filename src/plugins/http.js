import axios from 'axios'
import Vue from 'vue'
const httpHelper = {}
httpHelper.install = function (vue) {
  axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
  axios.interceptors.request.use(function(config) {
    if (config.url !== 'login') {
      const token = sessionStorage.getItem('token')
      config.headers.Authorization = token
    }
    return config 
  },function (error){
    return Promise.reject(error)
  })
  axios.interceptors.response.use(function(response){
    return response
  },function (error){
    return Promise.reject(error)
  })
  Vue.prototype.$http = axios
}
export default httpHelper
