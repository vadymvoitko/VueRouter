<template>
    <div id="app">
    <header>
      <div class="logo">
        <img 
        src="https://raw.githubusercontent.com/GitHubTochkaDev/vuejs-tutorials/vuex/src/assets/logo.png" 
        alt=""
        @click="$store.dispatch('loginLogout')"
        >
      </div>
      <search></search>
    </header>
    <main>
      <results></results>
    </main>
  </div>
</template>

<script>
import Results from './components/Results'
import Search from './components/Search'

export default {
  name: 'app',
  components: {
    Search,
    Results
  },
  created () {
    console.log(this.$store.getters)
  }
}
</script>

