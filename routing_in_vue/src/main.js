import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(axios)

new Vue({
  render: h => h(App)
}).$mount('#app')
