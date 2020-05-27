import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VBodyScrollLock from 'v-body-scroll-lock'
import 'normalize.css'
import './main.scss'

// Vue.use(VBodyScrollLock)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')