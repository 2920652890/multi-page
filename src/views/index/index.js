import Vue from 'vue'
import App from './App.vue'
import config from '@/configs'

Vue.config.productionTip = false

config(Vue)

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
