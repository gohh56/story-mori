<template>
  <div class="page-container">
    <h3>{{name}}</h3>
    <div class="page-text">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: "PageView",
  props: ["name", "text"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
