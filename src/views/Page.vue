<template>
  <div class="story-page-container">
    <h1>{{page.storyTitle}}</h1>
    <router-link
      v-if="page.parent"
      :to="{name: 'storyPage', params: { storyId: page.storyId, pageId: page.parent }}"
    >Back</router-link>
    <PageView v-bind:name="page.name" v-bind:text="page.text"/>
    <ul class="page-branches">
      <router-link
        tag="li"
        :to="{name: 'storyPage', params: { storyId: page.storyId, pageId: branch.id }}"
        v-for="branch of page.children"
        v-bind:key="branch.id"
      >
        <a>{{branch.name}}</a>
      </router-link>
    </ul>
    <button type="button" v-on:click="addNextPage">Add next page</button>
    <PageCreate v-if="showNewPage" v-on:saveNewPage="saveNewPage"/>
  </div>
</template>

<script>
import { getPage, savePage } from "@/lib/api-service";
import PageView from "@/components/PageView";
import PageCreate from "@/components/PageCreate";

export default {
  name: "Page",
  components: { PageView, PageCreate },
  data() {
    return {
      page: {},
      showNewPage: false
    };
  },
  created: async function() {
    this.loadPage();
  },
  watch: {
    // call again the method if the route changes
    $route: "loadPage"
  },
  methods: {
    async loadPage() {
      const { storyId, pageId } = this.$route.params;
      const page = await getPage(storyId, pageId);
      this.page = page;
    },
    addNextPage() {
      this.showNewPage = true;
    },
    async saveNewPage(page) {
      const { storyId, pageId } = this.$route.params;
      const { pageId: newPageId } = await savePage(storyId, pageId, page);
      this.showNewPage = false;
      this.$router.push({
        name: "storyPage",
        params: { storyId, pageId: newPageId }
      });
    }
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
