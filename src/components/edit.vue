<template>
   <div class="container">
      <div class="row">
         <div class="col-sm-8">
            <form @submit.prevent="UpdatePost">
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
               <button class="btn btn-primary">Update</button>
            </form>
         </div>
      </div>
   </div>
</template>


<script>
export default {
   data () {
      return {
         newPost: {},
      }
   },
   methods:{
      httpReq(id){
         this.$http.get('http://localhost:3000/posts/' + id)
         .then((response)=>{
            this.newPost = response.body
         })
         .catch()
      },
      UpdatePost(){
         var postData ={
            title: this.newPost.title,
            author: this.newPost.author,
            discription: this.newPost.discription,
         }
         
         if (postData.title && postData.author && postData.discription) {
            this.$http.put('http://localhost:3000/posts/' + this.$route.params.id, postData)
            .then((response) => {
               this.$router.push('/')
            })
            .catch()
            
         } else {
            alert('requre file')
         }
      },
   },
   mounted(){
      this.httpReq(this.$route.params.id)
   }
}

</script>

<style>
   label{
      text-transform: capitalize;
   }
</style>