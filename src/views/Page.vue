<template>
  <div id="page">
    <div class="name">{{ pageName }}</div>
    <div class="text">{{ pageText }}</div>
    <ul>
      <router-link
        tag="li"
        v-for="nextPage of nextPages"
        :key="nextPage.id"
        :to="{name: 'page', params: { pageId: nextPage.id }}"
      >
        <a>{{ nextPage.name }}</a>
      </router-link>
    </ul>
    <button @click="toggleForm">{{ formToggleTitle }}</button>
    <form v-show="isFormShown" @submit.prevent="savePage">
      <h2>New Page</h2>
      <input v-model.trim="nextPageName" placeholder="Name...">
      <textarea v-model.trim="nextPageText" placeholder="Text..."/>
      <button type="submit">Create new page</button>
    </form>
  </div>
</template>

<script>
import { getPage, savePage } from "@/lib/api-service";

export default {
  name: "Page",
  data: function() {
    return {
      pageName: "",
      pageText: "",
      nextPages: [],
      nextPageName: "",
      nextPageText: "",
      isFormShown: false
    };
  },
  computed: {
    formToggleTitle: function() {
      return this.isFormShown ? "Hide form" : "Create New Page";
    }
  },
  methods: {
    getPage: async function() {
      const { storyId, pageId } = this.$route.params;
      const page = await getPage(storyId, pageId);
      this.pageName = page.name;
      this.pageText = page.text;
      this.nextPages = page.children;
    },
    savePage: async function(/* event */) {
      const { storyId, pageId: parentId } = this.$route.params;
      const name = this.nextPageName;
      const text = this.nextPageText;
      const { id: pageId } = await savePage(storyId, parentId, name, text);
      this.resetForm();
      this.$router.push({ name: "page", params: { pageId: pageId } });
    },
    resetForm: function() {
      this.nextPageName = "";
      this.nextPageText = "";
      this.isFormShown = false;
    },
    toggleForm: function() {
      this.isFormShown = !this.isFormShown; // toggleならこういう書き方がよくする
    }
  },
  created: async function() {
    this.getPage();
  },
  watch: {
    $route: "getPage"
  }
};
</script>

<style scoped>
</style>
