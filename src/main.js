/*
 * @Description: 
 * @Autor: WJM
 * @Date: 2020-12-22 17:00:11
 * @LastEditors: WJM
 * @LastEditTime: 2020-12-25 08:43:03
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.prototype.$bus = new Vue({})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
