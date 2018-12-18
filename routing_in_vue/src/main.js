import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Blog from './components/Blog'
import Projects from './components/Projects'
import Brands from './components/Brands'
import Contacts from './components/Contacts'
import Post from './components/Post'

Vue.use(Router)
Vue.config.productionTip = false

const router = new Router({
  routes: [
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/brands',
      name: 'Brands',
      component: Brands
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: Post
    },
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
