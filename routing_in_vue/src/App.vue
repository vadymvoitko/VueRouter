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
  data () {
    return {
      reso: []
    }
  },
  components: {
    Search,
    Results
  },
  methods: {
    callMe() {
      let p = new Promise((Resolve, Reject)=>{
        setTimeout(() => {
          Resolve([1,2,3])
        }, 1500);
      })
      p.then(res => {
        console.log('1 ', res)
        this.reso.push(...res)
        return new Promise((resolve) => {
          resolve(res)
        })
      }).then(res => {
        console.log(this.reso);
        throw new Error('o_O');
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    console.log(this.$store.getters)
    this.callMe()
  }
}
</script>

