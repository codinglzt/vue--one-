// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'

import 'common/stylus/index.styl'
import 'common/font/iconfont.css'

Vue.config.productionTip = false
Vue.use(infiniteScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,
  components: { App },
  template: '<App/>'
})
