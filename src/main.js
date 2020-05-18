import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import confirm from './plugins/confirm/index.js'
Vue.use(confirm)

new Vue({
  render: h => h(App)
}).$mount('#app')
