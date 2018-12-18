import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    results: []
  },
  actions: {
    changeTest (store) {
      store.commit('changeTest')
    },
    fetchWords(store, query) {
        const options = {
            params : {
                action: 'query',
                meta: 'tokens',
                list: 'search',
                format: 'json',
                origin: '*',
                srsearch: query
            }
        }
        const url = 'https://en.wikipedia.org/w/api.php'
        axios.get(url, options)
        .then(res => {
            store.commit('setMovies', res.data.query.search)
        })
        .catch(err => {
            console.log(err)
        })

    },
    loginLogout ({commit}) {
        const options = {
            params : {
                action:"query",
                meta:"tokens",
                type:"login",
                format:"json",
                origin: 'http://192.168.1.130:8082',
                withCredentials: true
            },
            
        }

        const getToken = 'https://mediawiki.org/w/api.php'
        axios.post(getToken, options)
        .then(res => console.log(res))
        // const url = 'https://en.wikipedia.org/w/api.php'
        
        // commit('loginLogout')
    }
  },
  mutations: {
    setMovies (state, payload) {
      state.results = payload
    }
  },
  getters: {
    getMovies (state) {
        const newRes = [...state.results];
      return newRes.map(el => {
        el.url = 'https://en.wikipedia.org/wiki/' + el.title
        return el
    })
    }
  }
})

export default store