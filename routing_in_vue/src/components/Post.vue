<template>
  <div class="post" v-if="post">
    <img :src="post.image" alt="">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
import posts from './posts.js'
    export default {
        name: 'Post',
        data () {
            return {
                posts,
                post: null
            }
        },
        created () {
            this.post = this.posts[this.$route.params.id]
        }
    }
</script>