import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import vueConfirm from './plugins/confirm/index.js'
Vue.use(vueConfirm)

new Vue({
  render: h => h(App),
}).$mount('#app')
