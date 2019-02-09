<template>
  <div class="story-create-container">
    <h2>Add New Page</h2>
    <form v-on:submit.prevent="savePage">
      <input v-model="name" placeholder="Page Name...">
      <textarea v-model="text" placeholder="Page Text..."/>
      <button type="submit">Add new Page</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PageCreate",
  data() {
    return {
      name: "",
      text: ""
    };
  },
  methods: {
    async savePage() {
      const { name, text } = this;

      if (!name || !text) return;

      const page = {
        name,
        text
      };
      this.$emit("saveNewPage", page);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
