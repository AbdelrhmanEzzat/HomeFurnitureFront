<template lang="html">
  <div class="post" v-if="post">
    <h1 class="posttitle">{{ post.post_id }}</h1>
    <p class="postbody">{{post.post_title }}</p>
    <p class="postid">{{ post.firstpost }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['id'],
  
  data() {
    return {
      post:[],
      endpoint: 'https://homefurniture00.000webhostapp.com/api/posts/'
      
    }
    
  },
  
  methods: {
  getPost(id) {
    axios(this.endpoint + id)
      .then(response => {
        this.post = response.data

      })
      .catch( error => {
        console.log(error)

      })
  }
},

created() {
  this.getPost(this.id);
},
}

</script>