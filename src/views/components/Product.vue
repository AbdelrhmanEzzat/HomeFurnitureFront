<!-- <template>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
    </header>
      <div class="post" v-if="post">
    <h1 class="post__title">{{ post.title }}</h1>
    <p class="post__body">{{ post.body }}</p>
    <p class="post__id">{{ post.id }}</p>
  </div>

 <main>
  <aside class="sidebar">
    <router-link
        v-for="post in posts"
        v-bind:key="post.id"
        active-class="is-active"
        class="link"
        :to="{ name: 'post', params: { id: post.id } }">
      {{post.id}}. {{post.title}}
    </router-link>
  </aside>
  <div class="content">
    <router-view></router-view>
  </div>
</main>
  </div>
  
</template> -->
<template lang="html">
  <div class="post" v-if="post">
    <h1 class="post__title">{{ post.product_name }}</h1>
    <p class="post__body">{{ post.cost }}</p>
    <p class="post__id">{{ post.prod_id }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      post: null,
      endpoint: "/api/products/",
    };
  },
  methods: {
    getPost(id) {
      axios(this.endpoint + id)
        .then((response) => {
          this.post = response.data;
        })

        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getPost(this.id);
  },
};
// axios
//   .get("https://homefurniture00.000webhostapp.com/api/products/")
//   .then((res) => {
//     const data = res.data;
//     const sampleId = 93;
//     const post = data
//       .filter((obj) => {
//         return obj.prod_id === sampleId;
//       })
//       .pop();
//     console.log(post);
//   });
</script>
