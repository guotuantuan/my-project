// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'iview/dist/styles/iview.css';
import iView from 'iview';

axios.defaults.withCredentials=true;
Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.HOST = "/api"

// axios.defaults.baseURL = 'api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
