<template>
  <div class="story-list-container">
    <ul>
      <router-link tag="li" :to="{name: 'storyCreate'}"><a>新規ストーリー</a></router-link>
      <li v-for="story of stories" :key="story.id">{{story.title}}</li>
    </ul>
  </div>
</template>

<script>
import { getStories } from '@/lib/api-service'

export default {
  name: "StoryList",
  props: {
    msg: String
  },
  data() {
    return {
      stories: []
    };
  },
  created: async function() {
    const stories = await getStories();
    this.stories = stories;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
