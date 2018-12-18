<template>
  <div id="app">
          <header>
        <div class="header-wrapper">
          <img src="http://acmelogos.com/images/logo-8.svg" alt="" class="logo">

          <nav>
            <router-link to="/brands">+ Бренды</router-link>
            <router-link to="/blog" active-class="grey">+ Блог</router-link>
            <router-link to="/projects">+ Проекты</router-link>
            <router-link to="/contacts">+ Контакты</router-link>
          </nav>
        </div>
      </header>
     <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    
  }
}
</script>
