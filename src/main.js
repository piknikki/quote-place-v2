import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRandomcolor from 'vue-randomcolor'

Vue.config.productionTip = false
Vue.use(VueRandomcolor)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
