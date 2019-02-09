<template>
  <div class="story-create-container">
    <router-link :to="{name: 'storyList'}">キャンセル</router-link>
    <h2>New Story</h2>
    <form v-on:submit.prevent="saveStory">
      <input v-model="title" placeholder="Title...">
      <textarea v-model="text" placeholder="First Page..."/>
      <button type="submit">Create new story</button>
    </form>
  </div>
</template>

<script>
import { saveStory } from "../lib/api-service";
export default {
  name: "StoryCreate",
  data() {
    return {
      title: "",
      text: ""
    };
  },
  methods: {
    async saveStory() {
      const { title, text } = this;

      if (!title || !text) return;

      const story = {
        title,
        text
      };
      const { storyId, pageId } = await saveStory(story);
      // Redirect to story page
      this.$router.push({ name: "storyPage", params: { storyId, pageId } });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
