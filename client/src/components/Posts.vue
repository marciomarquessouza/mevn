<template>
  <div class="posts">
    <h1>Posts</h1>
    <div v-if="postsLength > 0" class="table-wrap">
      <div>
        <router-link :to="{ name: 'NewPost' }" class="">Add Post</router-link>
      </div>
      <table>
        <tr>
          <td>Title</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="(post, index) in posts"  :key="index">
          <td>{{ post.title }}</td>
          <td>{{ post.description }}</td>
          <td align="center">
            <router-link
              v-bind:to="{ name: 'EditPost', params: { id: post._id } }">
              Edit
            </router-link> |
            <a href="#">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no posts.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link">Add Post</router-link>
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
      this.posts = response.data.posts;
    },
  },
  computed: {
    postsLength() {
      return Object.values(this.posts).length;
    },
  },
};
</script>

<style>
  .table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
  }

  table th, table tr {
    text-align: left;
  }

  table thead {
    background: #f2f2f2;
  }

  table tr td {
    padding: 10px;
  }

  table tr:nth-child(odd) {
    background: #f2f2f2;
  }

  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
  }

  a {
    color: #4d7ef7;
    text-decoration: none;
  }

  a.add_post_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }

</style>
