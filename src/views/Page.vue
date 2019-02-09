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
  </div>
</template>

<script>
import { getPage } from "@/lib/api-service";

export default {
  name: "Page",
  data: function() {
    return {
      pageName: "",
      pageText: "",
      nextPages: []
    };
  },
  methods: {
    getPage: async function() {
      const { storyId, pageId } = this.$route.params;
      const page = await getPage(storyId, pageId);
      this.pageName = page.name;
      this.pageText = page.text;
      this.nextPages = page.children;
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
