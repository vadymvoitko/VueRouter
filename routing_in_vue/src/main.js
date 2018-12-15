import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'Brands',
      path: '/brands',
      component: Brand
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
