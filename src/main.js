import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './main.scss'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// menu

// let menuBtn = document.querySelector('.menu-btn');
// let mobileMenu = document.querySelector('.mobile_menu-wrapper');
// let overlay = document.querySelector('.overlay');
// let close = document.querySelector('.cross');

// menuBtn.addEventListener('click', function (el) {
//   el.preventDefault();
//   overlay.classList.add('visible');
//   mobileMenu.classList.add('menu_active');
//   close.classList.add('show-cross');
// })

// close.addEventListener('click', function () {
//   overlay.classList.remove('visible');
//   mobileMenu.classList.remove('menu_active');
//   close.classList.remove('show-cross');
// })