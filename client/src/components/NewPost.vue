<template>
<div class="posts">
  <h1>Add Posts</h1>
  <div class="form">
    <div>
      <input  v-model="title"
              type="text"
              name="title"
              placeholder="TITLE" />
    </div>
    <div>
      <textarea v-model="description"
                rows="15"
                cols="15"
                placeholder="DESCRIPTION" />
    </div>
    <div>
      <button class="app_post_btn" @click="addPost()">Add</button>
    </div>
  </div>
</div>
</template>

<script>

import PostService from '@/services/PostsService';

export default {
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    async addPost() {
      await PostService.addPost({
        title: this.title,
        description: this.description,
      });
      this.$router.push({ name: 'Posts' });
    },
  },
};
</script>

<style>
  .form input, .form textarea {
    width: 500px;
    padding: 10px;
    border: 1px solid #e0dede;
    outline: none;
    font-size: 12px;
  }

  .form div {
    margin: 20px;
  }

  .app_post_btn {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    width: 520px;
    border: none;
    cursor: pointer;
  }
</style>
