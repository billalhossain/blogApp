<template>
   <div class="container">
      <div class="row">
         <div class="col-sm-8">
            <form @submit.prevent="addPost">
               <div class="form-group">
                  <label for="">title</label>
                  <input type="text" class="form-control" v-model="newPost.title">
               </div>
               <div class="form-group">
                  <label for="">author</label>
                  <input type="text" class="form-control" v-model="newPost.author">
               </div>
               <div class="form-group">
                  <label for="">discription</label>
                  <input type="text" class="form-control" v-model="newPost.discription">
               </div>
               <button class="btn btn-primary">submits</button>
            </form>
         </div>
      </div>
   </div>
</template>


<script>
export default {
   data () {
      return {
         newPost: {
            time: new Date()
         },
      }
   },
   methods:{
      addPost(){
         var postData ={
            title: this.newPost.title,
            author: this.newPost.author,
            time: this.newPost.time,
            discription: this.newPost.discription
         }
         
         if (postData.title && postData.author && postData.discription) {
            this.$http.post('http://localhost:3000/posts', postData)
            .then((response) => {
               this.$router.push('/')
            })
            .catch()
         } else {
            alert('requre file')
         }
      },

   }
}
</script>

<style>
   label{
      text-transform: capitalize;
   }
</style>