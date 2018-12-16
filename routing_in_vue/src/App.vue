<template>
  <div id="app">
    <Search></Search>
    <Results></Results>
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

