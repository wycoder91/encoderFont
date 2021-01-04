// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element-ui依赖
import ElementUI from 'element-ui'
//导入全局样式表
import './assets/css/global.css'
//引入第三方图标库，r0图标库，还未入住，IconFont组件
Vue.use(ElementUI)
Vue.config.productionTip = false
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/user'
Vue.prototype.$http=axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
