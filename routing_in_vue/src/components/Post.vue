<template>
  <div class="post" v-if="post">
        <img :src="post.image" alt="">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <h3>{{ $route.params.text }}</h3>
    <button @click="$router.go(-2)">go</button>
  </div>
</template>

<script>
import posts from './posts.js'
    export default {
        name: 'Post',
        data () {
          return {
            posts,
            post: ''
          }
        },
        created () {
          this.post = this.posts[this.$route.params.id]

        }
    }
</script>