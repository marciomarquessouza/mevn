<template>
  <div class="posts">
    <h1>This file will list all posts</h1>
    <div v-for="(post, index) in posts"  :key="index">
      <p>{{ post.title }}</p>
      <p>{{ post.description }}</p>
    </div>
  </div>
</template>

<script>

import PostService from '@/services/PostsService';

export default {
  name: 'posts',
  mounted() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async getPosts() {
      const response = await PostService.fetchPosts();
      this.posts = response.data;
    },
  },
};
</script>
