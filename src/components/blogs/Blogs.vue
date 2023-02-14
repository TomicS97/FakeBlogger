<template>
  <div>
    <div v-bind:key="blog.id" v-for="blog in blogs">
      <BlogItem v-bind:blog="blog"
        v-on:delete-blog="$emit(`delete-blog`, blog.id, blog.body, blog.title, blog.userId)" />
    </div>
  </div>
</template>

<script>
import BlogItem from "./BlogItem.vue";

export default {                                        //Export compoenet 
  name: "Blogs",
  components: {
    BlogItem,
  },
  props: ["blogs"],
};
</script>

<style scoped>

</style>
