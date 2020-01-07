<template>
   <div class="container">
      <div class="row">
         <div class="col-sm-10">
            <div class="blog-posts" v-for="post in posts">
               <div class="panel panel-default">
                  <div class="panel-heading">{{post.title}}</div>
                  <div class="panel-body">
                     <p><strong>Author Name: </strong>{{post.author}}</p>
                     <p><b>Posted on:</b> {{ getDate(post) }}</p>
                     <p>{{ (post.discription).slice(0,150) }} ......</p>
                     <router-link class="btn btn-primary" :to="'/single-blog/' + post.id">Read More
                     </router-link>
                     <button class="btn btn-danger pull-right" @click="DeletePost(post)">Delete</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
var moment = require('moment')
export default {
   data () {
      return {
         posts: [],
      }
   },
   mounted: {
      filteredList() {
         return this.items.filter( function(data) {
            return data.indexOf(this.search) != -1
         })
      }
   },
   mounted(){
      this.$http.get('http://localhost:3000/posts')
      .then((response)=>{
         this.posts = response.body
      })
      .catch()
   },
   methods:{
      DeletePost(post){
         this.$http.delete('http://localhost:3000/posts/' + post.id)
         .then((response) => {
            var index = this.posts.indexOf(post);
            this.posts.splice(index,1)
         })
         .catch()
      },

      getDate: function(post){
         return moment(post.time).format('MMM DD, YYYY. hh mm A')
      }
   }
}
</script>

<style>
   .panel-heading{
      text-transform: capitalize;
      font-weight: bold;
      font-size: 18px;
   }
</style>