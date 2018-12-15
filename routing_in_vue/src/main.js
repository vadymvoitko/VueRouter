import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(Router)

import Brands from './components/Brands.vue'
import Contacts from './components/Contacts.vue'
import Projects from './components/Projects.vue'
import Blog from './components/Blog.vue'
import Post from './components/Post.vue'

const router = new Router({
  routes: [
    {
      name: 'Brands',
      path: '/brands',
      component: Brands
    },
    {
      name: 'Contacts',
      path: '/contacts',
      component: Contacts
    },
    {
      name: 'Projects',
      path: '/projects',
      component: Projects
    },
    {
      name: 'Blog',
      path: '/blog',
      component: Blog
    },
    {
      name: 'Post',
      path: '/post/:ids',
      component: Post
    },
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
