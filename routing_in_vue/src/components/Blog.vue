 <template>
  <div class="blog">
    <div class="blog__post" v-for="(post, index) in posts" :key="index">
      <img :src="post.image" alt="">
      <h3>{{ post.title }}</h3>
      <router-link :to="{name: 'Post', params: {id: index}}">Detailed</router-link>
    </div>
  </div>
</template>

<script>
import posts from './posts.js'

export default {
  name: 'Blog',
  data() {
    return {
      posts
    }
  }
}
</script>
